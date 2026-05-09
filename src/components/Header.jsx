import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import wordmark from '../assets/strucx-wordmark.png'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre Nosotros', to: '/sobre-nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Sectores', to: '/sectores' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Trabaja con Nosotros', to: '/trabaja-con-nosotros' },
  { label: 'Contacto', to: '/contacto', highlight: true },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-8 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="StrucX inicio">
          <img src={wordmark} alt="STRUCX" className="h-7 w-auto max-w-[185px] object-contain sm:h-8 sm:max-w-[210px]" />
        </Link>

        <nav className="ml-auto hidden items-center gap-7 xl:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => {
                if (link.highlight) {
                  return `relative inline-flex h-11 items-center whitespace-nowrap text-sm font-semibold transition after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-yellow-500 after:transition-transform after:duration-200 hover:text-yellow-600 hover:after:scale-x-100 ${
                    isActive ? 'text-yellow-600' : 'text-yellow-500'
                  }`
                }

                return `relative inline-flex h-11 items-center whitespace-nowrap text-sm font-semibold transition after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-slate-950 after:transition-transform after:duration-200 hover:text-slate-950 hover:after:scale-x-100 ${
                  isActive ? 'text-slate-950' : 'text-slate-600'
                }`
              }}
            >
              {link.label.toUpperCase()}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/solicitar-servicio"
          className="ml-auto hidden rounded-lg bg-amber-400 px-6 py-3 text-sm font-black text-slate-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-500 sm:inline-flex xl:ml-0"
        >
          SOLICITAR SERVICIO
        </Link>

        <button
          type="button"
          className="ml-auto grid size-11 place-items-center rounded-lg border border-slate-200 text-slate-800 xl:hidden"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <Menu className="size-5" />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl shadow-slate-950/5 xl:hidden">
          <nav className="mx-auto grid max-w-[1500px] gap-2" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-md px-3 py-3 text-sm font-black transition hover:bg-slate-50 ${
                  link.highlight ? 'text-yellow-500 hover:text-yellow-600' : 'text-slate-700 hover:text-slate-950'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <Link
              to="/solicitar-servicio"
              className="mt-2 rounded-lg bg-amber-400 px-4 py-3 text-center text-sm font-black text-slate-950 transition hover:bg-amber-500"
              onClick={() => setIsOpen(false)}
            >
              SOLICITAR SERVICIO
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
