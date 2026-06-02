const items = ['One-Page-Website', 'mobile Optimierung', 'Kontaktformular', 'Veröffentlichung', '1 Korrekturrunde']

function Pricing() {
  return (
    <section className="section-spacing bg-white" aria-labelledby="pricing-title">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="reveal">
          <p className="section-eyebrow">Preisbereich</p>
          <h2 id="pricing-title" className="section-title">
            Ein klarer Einstieg für kleine Unternehmen
          </h2>
          <p className="section-copy">
            Der Starter-Umfang ist für Unternehmen gedacht, die eine professionelle Website brauchen, ohne ein großes
            Projekt daraus zu machen.
          </p>
        </div>

        <article className="premium-panel reveal overflow-hidden" style={{ transitionDelay: '120ms' }}>
          <div className="border-b border-line bg-navy-950 p-7 text-white sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Starter Website</p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-5xl font-semibold tracking-normal text-white sm:text-6xl">ab 490 €</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Für einen klaren, professionellen Start ohne unnötige Komplexität.
            </p>
          </div>
          <div className="p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Enthalten</p>
            <ul className="mt-6 space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/10 text-[10px] font-bold text-accent" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#kontakt" className="btn-primary mt-8 w-full">
              Anfrage senden
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Pricing
