import { FileCheck2, Network, Settings2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const points = [
  {
    title: 'Control total del proyecto',
    text: 'Definimos alcance, prioridades, dependencias y calendario antes de movilizar recursos.',
    icon: Settings2,
  },
  {
    title: 'Equipos propios o gestionados',
    text: 'Coordinamos oficios, proveedores y especialistas según las exigencias técnicas de cada obra.',
    icon: Network,
  },
  {
    title: 'Cumplimiento y documentación',
    text: 'Trabajamos con registros claros, partes de avance y criterios de entrega verificables.',
    icon: FileCheck2,
  },
]

function WhatWeDo() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Servicios para espacios profesionales con control operativo completo"
          text="StrucX convierte necesidades de obra, reparación y mantenimiento en planes de trabajo claros para negocios, administradores y gestores de activos profesionales en Madrid."
        />
        <div className="grid gap-5">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <article key={point.title} className="border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-950/10">
                <div className="flex items-start gap-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-md bg-slate-950 text-amber-400">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-slate-950">{point.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{point.text}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
