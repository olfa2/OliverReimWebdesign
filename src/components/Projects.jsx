const projects = [
  {
    title: 'Friseur Website',
    text: 'Ein moderner One-Pager mit Leistungen, Preisen, Standort und schneller Termin-Anfrage.',
  },
  {
    title: 'Handwerker Website',
    text: 'Eine klare Website für Leistungen, Einsatzgebiet, Referenzen und unkomplizierte Kontaktaufnahme.',
  },
  {
    title: 'Restaurant Website',
    text: 'Ein eleganter Webauftritt mit Speisekarte, Öffnungszeiten, Reservierungsanfrage und Google Maps.',
  },
]

const browserDots = Array.from({ length: 3 })
const previewTiles = Array.from({ length: 3 })

function Projects() {
  return (
    <section id="beispiele" className="section-spacing bg-white" aria-labelledby="projects-title">
      <div className="container-page">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-eyebrow">Beispiele</p>
            <h2 id="projects-title" className="section-title">
              Demo-Projekte für lokale Branchen
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            Die Beispiele zeigen, wie eine schlanke Website für unterschiedliche Unternehmen aufgebaut sein kann.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="surface-card reveal group overflow-hidden"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="border-b border-line bg-navy-950 p-4">
                <div className="lift-shadow rounded-lg bg-white p-3 transition duration-300 group-hover:-translate-y-1">
                  <div className="mb-3 flex gap-1.5">
                    {browserDots.map((_, dotIndex) => (
                      <span key={dotIndex} className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    ))}
                  </div>
                  <div className="rounded-md bg-mist p-4">
                    <div className="h-3 w-28 rounded-full bg-navy-950" />
                    <div className="mt-4 h-12 rounded-lg bg-accent/15" />
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {previewTiles.map((_, tileIndex) => (
                        <div key={tileIndex} className="h-9 rounded bg-white" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-semibold text-navy-950">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.text}</p>
                <a href="#" className="btn-secondary mt-6 w-full">
                  Demo ansehen
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
