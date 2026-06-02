# Oliver Reim Webdesign

Moderne Landingpage für ein kleines Webdesign-Business in Wien. Die Website richtet sich an lokale kleine Unternehmen,
die eine professionelle, einfache und mobil optimierte Website benötigen.

## Tech-Stack

- Node.js
- Vite
- React
- Tailwind CSS
- Keine UI-Library und keine externen Component Libraries

## Projektstruktur

```txt
src/
  components/
    About.jsx
    Benefits.jsx
    Contact.jsx
    Footer.jsx
    Header.jsx
    Hero.jsx
    Offer.jsx
    Pricing.jsx
    Process.jsx
    Projects.jsx
  App.jsx
  index.css
  main.jsx
```

## Installation

```bash
npm install
```

## Entwicklung starten

```bash
npm run dev
```

Der Befehl startet gleichzeitig den Vite-Client und den lokalen Mail-Server. Das Kontaktformular sendet seine Anfrage an
`/api/contact`; Vite leitet diese API im Entwicklungsmodus an `http://localhost:3001` weiter.

## Production-Build erstellen

```bash
npm run build
```

## Mail-System einrichten

1. `.env.example` kopieren und als `.env` speichern.
2. SMTP-Daten des Mail-Anbieters eintragen.
3. `MAIL_TO` auf die Adresse setzen, die Kontaktanfragen erhalten soll.
4. `npm run dev` neu starten.

Beispiel:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=mail@example.com
SMTP_PASS=your-password-or-app-password
MAIL_TO=oliver@example.com
MAIL_FROM="Oliver Reim Webdesign <mail@example.com>"
```

Für Gmail muss in der Regel ein App-Passwort verwendet werden, nicht das normale Login-Passwort.

## Inhalte und Funktionen

- Responsive Header mit Mobile-Menü
- Hero Section mit klaren Call-to-Actions
- Angebots-, Vorteile-, Beispiel-, Ablauf- und Preisbereich
- Kontaktformular mit clientseitiger und serverseitiger Validierung
- Mailversand über Node.js, Express und Nodemailer
- Scroll-Reveal-Animationen mit IntersectionObserver
- Semantisches HTML und grundlegende Accessibility-Attribute
