const included = [
  'individuelles Design',
  'mobil optimierte Darstellung',
  'Kontaktformular',
  'klare Struktur',
  'Google Maps Einbindung',
  'einfache Textoptimierung',
  'schnelle Ladezeiten',
  '1 Korrekturrunde',
]

function Offer() {
  return (
    <section id="angebot" className="section-spacing bg-white" aria-labelledby="offer-title">
      <div className="container-page grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="reveal">
          <p className="section-eyebrow">Angebot</p>
          <h2 id="offer-title" className="section-title">
            Starter Website ab 490 €
          </h2>
          <p className="section-copy">
            Eine moderne One-Page-Website für kleine Unternehmen, ideal für Friseure, Restaurants, Handwerker,
            Kosmetikstudios, Fahrschulen und lokale Dienstleister.
          </p>
          <a href="#kontakt" className="btn-primary mt-8">
            Projekt anfragen
          </a>
        </div>

        <div className="premium-panel reveal grid gap-px overflow-hidden bg-line" style={{ transitionDelay: '120ms' }}>
          {included.map((item, index) => (
            <div key={item} className="group flex items-center gap-4 bg-white p-5 transition duration-300 hover:bg-mist sm:p-6">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-navy-950 text-xs font-bold text-white transition duration-300 group-hover:bg-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-semibold text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offer
