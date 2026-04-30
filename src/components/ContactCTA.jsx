import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone } from 'lucide-react'

function ContactCTA() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-y border-slate-200 py-14 lg:grid-cols-[0.92fr_0.72fr] lg:items-center">
          <div className="border-l-4 border-amber-400 pl-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-500">Contacto</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              ¿Necesitas coordinar una intervención?
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              Cuéntanos el alcance, ubicación y prioridad del trabajo. Revisaremos la solicitud y te indicaremos el siguiente paso operativo.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/solicitar-servicio"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-6 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Solicitar Servicio
                <ArrowRight className="size-5" />
              </Link>
            </div>
            <div className="mt-7 grid gap-3 text-sm font-bold text-slate-600 sm:grid-cols-2">
              <a className="inline-flex items-center gap-2 transition hover:text-slate-950" href="tel:+34600123456">
                <Phone className="size-4 text-amber-500" />
                +34 600 123 456
              </a>
              <a className="inline-flex items-center gap-2 transition hover:text-slate-950" href="mailto:contacto@strucx-demo.com">
                <Mail className="size-4 text-amber-500" />
                contacto@strucx-demo.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
