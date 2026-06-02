const benefits = [
  {
    title: 'Professioneller erster Eindruck',
    text: 'Ein ruhiger, hochwertiger Auftritt zeigt direkt, dass Ihr Unternehmen verlässlich arbeitet.',
  },
  {
    title: 'Bessere Darstellung am Handy',
    text: 'Ihre Inhalte bleiben auf Smartphone, Tablet und Desktop klar lesbar und einfach nutzbar.',
  },
  {
    title: 'Einfachere Kontaktaufnahme',
    text: 'Besucher finden Telefonnummer, Formular und wichtige Informationen ohne Umwege.',
  },
  {
    title: 'Mehr Vertrauen bei potenziellen Kunden',
    text: 'Eine saubere Struktur und klare Texte helfen Kunden, schneller eine Anfrage zu stellen.',
  },
]

function Benefits() {
  return (
    <section className="section-spacing bg-mist" aria-labelledby="benefits-title">
      <div className="container-page">
        <div className="reveal max-w-3xl">
          <p className="section-eyebrow">Vorteile</p>
          <h2 id="benefits-title" className="section-title">
            Was eine gute Website für Ihr Unternehmen leistet
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="surface-card reveal group overflow-hidden p-6"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-7 h-1.5 w-14 rounded-full bg-accent/30 transition duration-300 group-hover:w-20 group-hover:bg-accent" />
              <h3 className="text-lg font-semibold leading-7 text-navy-950">{benefit.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
