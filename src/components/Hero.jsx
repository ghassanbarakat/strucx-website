import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, ClipboardCheck, ShieldCheck } from 'lucide-react'

const trustItems = [
  { label: 'Equipos cualificados', icon: BadgeCheck },
  { label: 'Respuesta en Madrid', icon: ClipboardCheck },
  { label: 'Garantía documentada', icon: ShieldCheck },
]

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.96),rgba(15,23,42,0.78)),url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85')] bg-cover bg-center" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-amber-300">
            Construcción profesional para empresas en Madrid
          </p>
          <h1 className="max-w-5xl text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
            Reformas, obra y mantenimiento comercial en Madrid
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            StrucX ejecuta trabajos para locales, oficinas, activos industriales, clínicas, comunidades comerciales y carteras inmobiliarias. Coordinamos oficios, documentación y plazos con un proceso claro de principio a fin.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/solicitar-servicio"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-400 px-6 py-4 text-base font-black text-slate-950 shadow-xl shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Solicitar Servicio
              <ArrowRight className="size-5" />
            </Link>
            <a
              href="tel:+34600123456"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-4 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
            >
              Llamar Ahora
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-center gap-3 border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <Icon className="size-5 shrink-0 text-amber-300" />
                  <span className="text-sm font-black uppercase tracking-wide text-white">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="self-end border border-white/15 bg-white p-5 text-slate-950 shadow-2xl shadow-black/30">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-600">Servicio en Madrid</p>
          <div className="mt-5 grid gap-4">
            {['Diagnóstico inicial', 'Presupuesto claro', 'Ejecución coordinada', 'Entrega con garantía'].map((item, index) => (
              <div key={item} className="flex items-center gap-4 border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                <span className="text-3xl font-black text-slate-200">0{index + 1}</span>
                <span className="text-lg font-black text-slate-950">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
