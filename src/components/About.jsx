function About() {
  return (
    <section className="section-spacing bg-mist" aria-labelledby="about-title">
      <div className="container-page reveal grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="section-eyebrow">Über mich</p>
          <h2 id="about-title" className="section-title">
            Klarer Webauftritt statt komplizierter Technik
          </h2>
          <div className="section-copy space-y-5">
            <p>
              Ich bin Oliver Reim, Schüler an der HTL Spengergasse in Wien, und beschäftige mich mit
              Webentwicklung, modernen Websites und digitalen Lösungen für kleine Unternehmen.
            </p>
            <p>
              Mein Fokus liegt auf klaren, professionellen Websites, die gut aussehen, auf dem Handy funktionieren und
              Kunden schnell zu den wichtigsten Informationen führen.
            </p>
          </div>
        </div>
        <div className="premium-panel p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-xl bg-mist p-5">
              <p className="text-sm font-semibold text-slate-500">Fokus</p>
              <p className="mt-2 text-lg font-semibold text-navy-950">Lokale Unternehmen in Wien</p>
            </div>
            <div className="rounded-xl bg-mist p-5">
              <p className="text-sm font-semibold text-slate-500">Ansatz</p>
              <p className="mt-2 text-lg font-semibold text-navy-950">Klar, mobil und verkaufsorientiert</p>
            </div>
            <div className="rounded-xl bg-mist p-5">
              <p className="text-sm font-semibold text-slate-500">Umsetzung</p>
              <p className="mt-2 text-lg font-semibold text-navy-950">Schlank, modern und schnell ladend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
