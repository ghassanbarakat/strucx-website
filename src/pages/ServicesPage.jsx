import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardCheck } from 'lucide-react'
import Services from '../components/Services'

const delivery = [
  {
    title: 'Coordinación única',
    text: 'Un interlocutor técnico organiza oficios, accesos, prioridades y comunicación.',
  },
  {
    title: 'Ejecución controlada',
    text: 'Cada trabajo avanza con alcance definido, responsables claros y seguimiento operativo.',
  },
  {
    title: 'Cierre documentado',
    text: 'La intervención se entrega con revisión, evidencias y garantía aplicable.',
  },
]

function ServicesPage() {
  return (
    <main>
      <section className="bg-white px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-500">Servicios</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.98] tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
              Ejecución comercial coordinada en Madrid.
            </h1>
          </div>
          <div className="border-l-4 border-amber-400 pl-6">
            <p className="text-xl leading-9 text-gray-600">
              Servicios técnicos y obra comercial gestionados bajo un sistema claro: alcance, coordinación, ejecución y cierre documentado.
            </p>
            <Link
              to="/solicitar-servicio"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-gray-950 px-6 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
            >
              Solicitar Servicio
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-300">Modelo de servicio</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
              Un solo equipo para resolver el trabajo completo.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            StrucX evita la dispersión de proveedores. Centralizamos coordinación, comunicación y documentación para que cada intervención tenga responsables claros y un cierre verificable.
          </p>
        </div>
      </section>

      <Services />

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-500">Entrega</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-gray-950">
              Cómo se mantiene el control.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {delivery.map((item, index) => (
              <article key={item.title} className="border border-gray-200 bg-white p-6 shadow-sm">
                <ClipboardCheck className="size-7 text-amber-500" />
                <p className="mt-6 text-sm font-black text-gray-400">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-black text-gray-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-400 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-3xl text-3xl font-black uppercase leading-tight text-gray-950">
            ¿Necesitas coordinar una intervención en Madrid?
          </h2>
          <Link
            to="/solicitar-servicio"
            className="inline-flex w-fit items-center justify-center rounded-md bg-gray-950 px-6 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
          >
            Solicitar Servicio
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
