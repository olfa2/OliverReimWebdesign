import { useState } from 'react'

const initialValues = {
  name: '',
  company: '',
  website: '',
  email: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Bitte geben Sie Ihren Namen ein.'
  }

  if (!values.email.trim()) {
    errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
  }

  if (!values.message.trim()) {
    errors.message = 'Bitte beschreiben Sie kurz Ihr Anliegen.'
  } else if (values.message.trim().length < 20) {
    errors.message = 'Die Nachricht sollte mindestens 20 Zeichen enthalten.'
  }

  return errors
}

function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setIsSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitted(true)
      setValues(initialValues)
    }
  }

  return (
    <section id="kontakt" className="section-spacing bg-navy-950 text-white" aria-labelledby="contact-title">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="reveal">
          <p className="section-eyebrow text-accent">Kontakt</p>
          <h2 id="contact-title" className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl">
            Kostenlose Website-Analyse anfragen
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Schreiben Sie kurz, welches Unternehmen Sie führen und was Ihre Website leisten soll. Ich melde mich mit
            einer ersten Einschätzung.
          </p>
          <div className="mt-8 border-l border-accent/60 pl-5 text-sm leading-7 text-slate-300">
            Ideal, wenn Ihre aktuelle Website veraltet ist, auf dem Handy nicht überzeugt oder noch gar keine Website
            vorhanden ist.
          </div>
        </div>

        <form className="premium-panel reveal p-5 text-navy-900 sm:p-7 lg:p-8" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" value={values.name} error={errors.name} onChange={handleChange} required />
            <Field label="Unternehmen" name="company" value={values.company} error={errors.company} onChange={handleChange} />
            <Field label="Website" name="website" value={values.website} error={errors.website} onChange={handleChange} />
            <Field
              label="E-Mail"
              name="email"
              type="email"
              value={values.email}
              error={errors.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-semibold text-navy-950">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="field-input min-h-36 resize-y"
              required
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-sm font-medium text-red-700">
                {errors.message}
              </p>
            )}
          </div>

          {isSubmitted && (
            <div className="mt-5 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm font-medium text-accentDark">
              Danke für Ihre Anfrage. Die Nachricht wurde clientseitig erfasst und das Formular ist bereit für eine
              Backend-Anbindung.
            </div>
          )}

          <button type="submit" className="btn-primary mt-6 w-full">
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({ label, name, value, error, onChange, type = 'text', required = false }) {
  const errorId = `${name}-error`

  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-navy-950">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="field-input"
      />
      {error && (
        <p id={errorId} className="mt-2 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}

export default Contact
