import { CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const reasons = [
  'Licencias y seguros',
  'Coordinación de oficios',
  'Comunicación estructurada',
  'Documentación completa',
  'Soporte para carteras comerciales',
]

function WhyChoose() {
  return (
    <section id="sobre-nosotros" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Por qué StrucX"
            title="Construcción gestionada para negocios que necesitan control"
            text="Diseñamos la operación alrededor de responsabilidad, trazabilidad y continuidad. El objetivo es ejecutar bien, comunicar con claridad y minimizar interrupciones en espacios profesionales."
          />
          <div className="mt-8 border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-600">Posicionamiento</p>
            <p className="mt-3 text-2xl font-black leading-tight text-slate-950">
              Un interlocutor técnico en Madrid para coordinar obra, oficios, calidad y entrega.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-center gap-4 border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10">
              <CheckCircle2 className="size-6 shrink-0 text-amber-500" />
              <span className="text-lg font-black text-slate-900">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
