import { useState } from 'react'

const navigation = [
  { label: 'Angebot', href: '#angebot' },
  { label: 'Beispiele', href: '#beispiele' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Kontakt', href: '#kontakt' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 shadow-sm shadow-navy-950/5 backdrop-blur-xl">
      <nav className="container-page flex min-h-[76px] items-center justify-between" aria-label="Hauptnavigation">
        <a href="#top" className="flex items-center gap-3 text-base font-semibold tracking-normal text-navy-950" onClick={closeMenu}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-950 text-sm font-bold text-white shadow-lg shadow-navy-950/15">
            OR
          </span>
          <span>Oliver Reim Webdesign</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#kontakt" className="btn-primary hidden md:inline-flex">
          Kostenlose Analyse
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy-900 shadow-sm transition hover:border-accent hover:text-accent focus:outline-none focus:ring-4 focus:ring-accent/15 md:hidden"
          aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/70 bg-white/95 shadow-lg shadow-navy-950/5 backdrop-blur-xl md:hidden">
          <div className="container-page flex flex-col gap-2 py-5">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-mist hover:text-navy-950"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a href="#kontakt" className="btn-primary mt-2 w-full" onClick={closeMenu}>
              Kostenlose Analyse
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
