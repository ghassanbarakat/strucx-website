import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Cable, Droplets, Fan, Hammer, Wrench } from 'lucide-react'

const previewServices = [
  { title: 'Electricidad', icon: Cable },
  { title: 'Fontanería', icon: Droplets },
  { title: 'Climatización', icon: Fan },
  { title: 'Reformas', icon: Hammer },
  { title: 'Mantenimiento', icon: Wrench },
  { title: 'Construcción comercial', icon: Building2 },
]

function ServicesPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-500">Servicios</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-slate-950 sm:text-5xl">
              Oficios coordinados para espacios profesionales.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600">
              Una visión rápida de las capacidades principales de StrucX. La página de servicios detalla cada oficio, alcance y forma de trabajo.
            </p>
            <Link
              to="/servicios"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-slate-950 px-6 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Ver servicios
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previewServices.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="flex items-center gap-4 border border-slate-200 bg-slate-50 p-5">
                <span className="grid size-11 place-items-center rounded-md bg-slate-950 text-amber-400">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-lg font-black text-slate-950">{service.title}</h3>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
