const sideCards = [
  { titleWidth: 'w-20', lineWidth: 'w-32' },
  { titleWidth: 'w-24', lineWidth: 'w-28' },
  { titleWidth: 'w-16', lineWidth: 'w-32' },
]

const metricCards = Array.from({ length: 3 })

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" aria-hidden="true" />
      <div className="container-page grid min-h-[calc(100vh-76px)] items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="reveal">
          <p className="section-eyebrow">Webdesign für lokale Unternehmen</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-normal text-navy-950 sm:text-5xl lg:text-7xl">
            Moderne Websites für kleine Unternehmen in Wien
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Ich erstelle professionelle, mobil optimierte Websites, die Vertrauen aufbauen und Kunden einfacher zur
            Anfrage bringen.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" className="btn-primary">
              Kostenlose Website-Analyse
            </a>
            <a href="#beispiele" className="btn-secondary">
              Beispiele ansehen
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 border-y border-line py-5 text-sm font-semibold text-slate-600 sm:grid-cols-4">
            <span>Webdesign</span>
            <span>Mobile Optimierung</span>
            <span>Kontaktformulare</span>
            <span>Schnelle Umsetzung</span>
          </div>
        </div>

        <div className="reveal relative" style={{ transitionDelay: '120ms' }}>
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-2xl border border-accent/20 bg-accent/5" aria-hidden="true" />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl border border-gold/30 bg-gold/10" aria-hidden="true" />
          <div className="premium-panel relative p-3 sm:p-4">
            <div className="rounded-xl border border-line bg-white p-4 sm:p-6">
              <div className="flex items-center justify-between border-b border-line pb-5">
                <div>
                  <div className="h-3 w-32 rounded-full bg-navy-950" />
                  <div className="mt-3 h-2 w-24 rounded-full bg-slate-200" />
                </div>
                <div className="h-11 w-28 rounded-lg border border-accent/20 bg-accent/10" />
              </div>
              <div className="grid gap-4 py-5 sm:grid-cols-[1.05fr_0.95fr] sm:py-6">
                <div className="lift-shadow rounded-xl bg-navy-950 p-5 text-white">
                  <div className="h-3 w-24 rounded-full bg-white/80" />
                  <div className="mt-6 space-y-3">
                    <div className="h-3 w-full rounded-full bg-white/20" />
                    <div className="h-3 w-4/5 rounded-full bg-white/20" />
                    <div className="h-3 w-2/3 rounded-full bg-white/20" />
                  </div>
                  <div className="mt-6 h-10 rounded-lg bg-accent" />
                </div>
                <div className="space-y-3">
                  {sideCards.map((card) => (
                    <div key={`${card.titleWidth}-${card.lineWidth}`} className="h-20 rounded-xl border border-line bg-gradient-to-br from-white to-mist p-4">
                      <div className={`h-2.5 ${card.titleWidth} rounded-full bg-slate-300`} />
                      <div className={`mt-4 h-2.5 ${card.lineWidth} rounded-full bg-slate-200`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 border-t border-line pt-5 sm:grid-cols-3">
                {metricCards.map((_, index) => (
                  <div key={index} className="rounded-lg bg-mist p-4">
                    <div className="h-2.5 w-12 rounded-full bg-accent/60" />
                    <div className="mt-3 h-2 w-20 rounded-full bg-slate-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
