import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '+10 años', label: 'Experiencia combinada' },
  { value: '100%', label: 'Gestión coordinada' },
  { value: '24/48h', label: 'Respuesta inicial' },
  { value: 'España', label: 'Cobertura nacional' },
]

function About() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-500">Sobre StrucX</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Un solo equipo. Cada proyecto bien ejecutado.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                StrucX coordina reformas, mantenimiento y construcción con un enfoque claro: planificación precisa, comunicación constante y ejecución documentada.
              </p>
              <p>
                Trabajamos con equipos cualificados, control de alcance, seguimiento operativo y criterios de calidad definidos para que cada intervención avance con orden desde la primera evaluación hasta la entrega.
              </p>
            </div>
            <Link
              to="/servicios"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-slate-950 px-6 py-4 font-black text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Conocer nuestros servicios
              <ArrowRight className="size-5" />
            </Link>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
              alt="Equipo de construcción coordinando un proyecto"
              className="h-[420px] w-full object-cover shadow-2xl shadow-slate-950/15 sm:h-[560px]"
            />
            <div className="absolute bottom-5 left-5 right-5 border border-white/20 bg-slate-950/90 p-5 text-white shadow-xl backdrop-blur sm:left-auto sm:w-80">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">Control de ejecución</p>
              <p className="mt-3 text-2xl font-black leading-tight">
                Planificación, coordinación y cierre documentado en cada proyecto.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid border border-slate-200 bg-slate-50 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-b border-slate-200 p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
              <p className="text-3xl font-black text-slate-950">{stat.value}</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
