const steps = [
  'Anfrage senden',
  'Kostenlose Einschätzung erhalten',
  'Angebot bestätigen',
  'Website wird umgesetzt',
  'Veröffentlichung',
]

function Process() {
  return (
    <section id="ablauf" className="section-spacing bg-mist" aria-labelledby="process-title">
      <div className="container-page">
        <div className="reveal max-w-3xl">
          <p className="section-eyebrow">Ablauf</p>
          <h2 id="process-title" className="section-title">
            Von der ersten Anfrage bis zur fertigen Website
          </h2>
        </div>
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step} className="reveal relative" style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="surface-card h-full p-5 sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-base font-semibold leading-6 text-navy-950">{step}</h3>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
