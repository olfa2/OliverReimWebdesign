import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const port = Number(process.env.PORT) || 3001
const isProduction = process.env.NODE_ENV === 'production'

app.use(express.json({ limit: '20kb' }))

const requiredFields = ['name', 'email', 'message']

function validateContact(payload) {
  const values = {
    name: String(payload.name || '').trim(),
    company: String(payload.company || '').trim(),
    website: String(payload.website || '').trim(),
    email: String(payload.email || '').trim(),
    message: String(payload.message || '').trim(),
  }

  const errors = {}

  for (const field of requiredFields) {
    if (!values[field]) {
      errors[field] = 'Dieses Feld ist erforderlich.'
    }
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
  }

  if (values.message && values.message.length < 20) {
    errors.message = 'Die Nachricht sollte mindestens 20 Zeichen enthalten.'
  }

  return { values, errors }
}

function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP configuration is incomplete.')
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === 'true',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function buildMail(values) {
  const website = values.website || 'Nicht angegeben'
  const company = values.company || 'Nicht angegeben'

  return {
    subject: `Neue Website-Anfrage von ${values.name}`,
    text: [
      'Neue Anfrage über oliver-reim-webdesign.at',
      '',
      `Name: ${values.name}`,
      `Unternehmen: ${company}`,
      `Website: ${website}`,
      `E-Mail: ${values.email}`,
      '',
      'Nachricht:',
      values.message,
    ].join('\n'),
    html: `
      <h2>Neue Website-Anfrage</h2>
      <p><strong>Name:</strong> ${escapeHtml(values.name)}</p>
      <p><strong>Unternehmen:</strong> ${escapeHtml(company)}</p>
      <p><strong>Website:</strong> ${escapeHtml(website)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(values.email)}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${escapeHtml(values.message).replaceAll('\n', '<br>')}</p>
    `,
  }
}

app.get('/api/health', (_request, response) => {
  response.json({ ok: true })
})

app.post('/api/contact', async (request, response) => {
  const { values, errors } = validateContact(request.body || {})

  if (Object.keys(errors).length > 0) {
    return response.status(400).json({ message: 'Bitte prüfen Sie Ihre Angaben.', errors })
  }

  try {
    const transporter = createTransporter()
    const mail = buildMail(values)

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      replyTo: values.email,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    })

    response.json({ message: 'Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet.' })
  } catch (error) {
    console.error('Mail delivery failed:', error.message)
    response.status(500).json({
      message: 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es später erneut.',
    })
  }
})

if (isProduction) {
  const dirname = path.dirname(fileURLToPath(import.meta.url))
  const distPath = path.resolve(dirname, '..', 'dist')

  app.use(express.static(distPath))
  app.get('*', (_request, response) => {
    response.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`Mail server listening on http://localhost:${port}`)
})
