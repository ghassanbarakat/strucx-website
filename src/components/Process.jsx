import { ClipboardList, FileSearch, HardHat, PackageCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'

const steps = [
  {
    title: 'Solicitud',
    text: 'Recibimos necesidades, ubicación, urgencia, tipo de activo y documentación disponible.',
    icon: ClipboardList,
  },
  {
    title: 'Evaluación',
    text: 'Analizamos alcance, riesgos, recursos, normativa aplicable y calendario de ejecución.',
    icon: FileSearch,
  },
  {
    title: 'Ejecución',
    text: 'Coordinamos oficios, materiales, seguridad, comunicación y control de avance en obra.',
    icon: HardHat,
  },
  {
    title: 'Entrega documentada',
    text: 'Cerramos con revisión, evidencias, garantía aplicable y documentación final del trabajo.',
    icon: PackageCheck,
  },
]

function Process() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Proceso"
          title="Ejecución estructurada desde la solicitud hasta la entrega"
          text="Cada proyecto avanza con una secuencia clara. Menos improvisación, más control y responsabilidades definidas."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <article key={step.title} className="relative border border-slate-200 bg-white p-6 shadow-sm">
                <span className="absolute right-5 top-5 text-4xl font-black text-slate-100">0{index + 1}</span>
                <div className="relative grid size-12 place-items-center rounded-md bg-amber-400 text-slate-950">
                  <Icon className="size-6" />
                </div>
                <h3 className="relative mt-8 text-xl font-black text-slate-950">{step.title}</h3>
                <p className="relative mt-3 leading-7 text-slate-600">{step.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Process
