import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Sectores', to: '/sectores' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Sobre Nosotros', to: '/sobre-nosotros' },
  { label: 'Trabaja con Nosotros', to: '/trabaja-con-nosotros' },
  { label: 'Solicitar Servicio', to: '/solicitar-servicio' },
  { label: 'Contacto', to: '/contacto' },
]

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3" aria-label="StrucX inicio">
            <span className="grid size-11 place-items-center rounded-md bg-amber-400 text-lg font-black text-slate-950">SX</span>
            <span className="text-2xl font-black uppercase tracking-tight">StrucX</span>
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-slate-300">
            Obras y mantenimiento en Madrid, sin improvisación.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-amber-400">Contacto</h3>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li>+34 600 123 456</li>
            <li>
              <a className="transition hover:text-white" href="mailto:contacto@strucx-demo.com">
                contacto@strucx-demo.com
              </a>
            </li>
            <li>Calle Falsa 123, 28000 Madrid, España</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-amber-400">Navegación</h3>
          <ul className="mt-5 space-y-3 text-slate-300">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link className="transition hover:text-white" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm font-semibold text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 STRUCX — Todos los derechos reservados — Madrid</p>
          <div className="flex gap-5">
            <a className="transition hover:text-white" href="#aviso-legal">
              Aviso legal
            </a>
            <a className="transition hover:text-white" href="#privacidad">
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
