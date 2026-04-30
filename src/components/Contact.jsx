import { Link } from 'react-router-dom'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'

const contactDetails = [
  { label: 'Teléfono', value: '+34 600 123 456', href: 'tel:+34600123456', icon: Phone },
  { label: 'Email', value: 'contacto@strucx-demo.com', href: 'mailto:contacto@strucx-demo.com', icon: Mail },
  { label: 'Dirección', value: 'Calle Falsa 123, 28000 Madrid, España', icon: MapPin },
  { label: 'Respuesta', value: '24/48h', icon: Clock3 },
]

function Contact() {
  return (
    <main className="bg-white">
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-500">Contacto</p>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.98] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Hablemos de tu proyecto.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Tanto si gestionas un local, una oficina, una comunidad o una propiedad comercial, el equipo de StrucX puede ayudarte a definir el siguiente paso.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.75fr]">
          <form className="border border-slate-200 bg-slate-50 p-5 shadow-xl shadow-slate-950/10 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black text-slate-800">Nombre</span>
                <input className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100" type="text" name="name" placeholder="Tu nombre" />
              </label>
              <label className="block">
                <span className="text-sm font-black text-slate-800">Empresa</span>
                <input className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100" type="text" name="company" placeholder="Nombre de empresa" />
              </label>
              <label className="block">
                <span className="text-sm font-black text-slate-800">Email</span>
                <input className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100" type="email" name="email" placeholder="tu@email.com" />
              </label>
              <label className="block">
                <span className="text-sm font-black text-slate-800">Teléfono</span>
                <input className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100" type="tel" name="phone" placeholder="+34 600 000 000" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-black text-slate-800">Mensaje</span>
                <textarea className="mt-2 min-h-40 w-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100" name="message" placeholder="Cuéntanos qué necesitas revisar, aclarar o planificar." />
              </label>
            </div>
            <button type="submit" className="mt-6 w-full rounded-md bg-amber-400 px-6 py-4 text-base font-black text-slate-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-300">
              Enviar mensaje
            </button>
          </form>

          <aside className="border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/15 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-300">Datos de contacto</p>
            <div className="mt-8 grid gap-5">
              {contactDetails.map((detail) => {
                const Icon = detail.icon
                const content = (
                  <div className="flex gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                    <Icon className="mt-1 size-5 shrink-0 text-amber-300" />
                    <div>
                      <p className="text-sm font-black uppercase tracking-wide text-slate-400">{detail.label}</p>
                      <p className="mt-1 font-bold leading-7 text-white">{detail.value}</p>
                    </div>
                  </div>
                )

                return detail.href ? (
                  <a key={detail.label} className="transition hover:opacity-80" href={detail.href}>
                    {content}
                  </a>
                ) : (
                  <div key={detail.label}>{content}</div>
                )
              })}
            </div>

            <div className="mt-8 border border-white/10 bg-white/5 p-5">
              <p className="font-bold leading-7 text-slate-200">
                Para solicitudes de obra o mantenimiento, usa Solicitar Servicio.
              </p>
              <Link
                to="/solicitar-servicio"
                className="mt-5 inline-flex rounded-md bg-amber-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-300"
              >
                Solicitar Servicio
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Contact
