import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'Adecuación técnica de local retail',
    type: 'Construcción comercial',
    result: 'Instalaciones coordinadas, acabados resistentes y apertura dentro del plazo previsto.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Reforma operativa de oficina',
    type: 'Oficinas',
    result: 'Redistribución de puestos, instalaciones actualizadas y entrega por fases para reducir interrupciones.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Mantenimiento multi-propiedad',
    type: 'Cartera inmobiliaria',
    result: 'Intervenciones priorizadas, registro de trabajos y soporte recurrente para el gestor.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85',
  },
]

function Projects() {
  return (
    <section id="proyectos" className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Proyectos"
          title="Trabajos ejecutados con alcance, control y resultado medible"
          text="Ejemplos de proyectos representativos para empresas, gestores de activos y espacios profesionales en Madrid."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-black/20">
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-400">{project.type}</p>
                  <ArrowUpRight className="size-5 text-slate-300 transition group-hover:text-amber-400" />
                </div>
                <h3 className="mt-4 text-xl font-black">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
