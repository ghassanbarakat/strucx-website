import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, ClipboardCheck, ShieldCheck } from 'lucide-react'

const trustItems = [
  { label: 'Equipos cualificados', icon: BadgeCheck },
  { label: 'Respuesta en Madrid', icon: ClipboardCheck },
  { label: 'Garantía documentada', icon: ShieldCheck },
]

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.94),rgba(15,23,42,0.80)),url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85')] bg-cover bg-center" />
      <div className="relative mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-amber-300">
          Construcción profesional para empresas en Madrid
        </p>
        <h1 className="text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
          Reformas, obra y mantenimiento comercial en Madrid
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-slate-300">
          StrucX ejecuta trabajos para locales, oficinas, activos industriales, clínicas, comunidades comerciales y carteras inmobiliarias. Coordinamos oficios, documentación y plazos con un proceso claro de principio a fin.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/solicitar-servicio"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-400 px-8 py-5 text-lg font-black text-slate-950 shadow-2xl shadow-amber-400/30 transition hover:-translate-y-0.5 hover:bg-amber-300"
          >
            Solicitar Servicio
            <ArrowRight className="size-5" />
          </Link>
          <a
            href="tel:+34600123456"
            className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-8 py-5 text-lg font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
          >
            Llamar Ahora
          </a>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-3 max-w-2xl mx-auto">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-center justify-center gap-3 border border-white/15 bg-white/10 p-4 backdrop-blur">
                <Icon className="size-5 shrink-0 text-amber-300" />
                <span className="text-sm font-black uppercase tracking-wide text-white">{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
