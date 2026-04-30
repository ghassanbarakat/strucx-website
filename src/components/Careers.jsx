import { useState } from 'react'
import { UploadCloud } from 'lucide-react'

const trustPoints = ['Proyectos estructurados', 'Equipos profesionales', 'Comunicación clara', 'Crecimiento a largo plazo']

const specialties = ['Electricidad', 'Fontanería', 'HVAC / Climatización', 'Reformas', 'Albañilería', 'Gestión de proyectos', 'Otro']
const experienceOptions = ['0-2 años', '3-5 años', '6-10 años', '+10 años']

function Careers() {
  const [fileName, setFileName] = useState('')

  return (
    <main className="bg-white">
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-500">Trabaja con Nosotros</p>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.98] tracking-tight text-slate-950 sm:text-6xl lg:text-8xl">
            Construye tu próximo capítulo
          </h1>
          <p className="mt-4 text-4xl font-black uppercase tracking-tight text-slate-200 sm:text-5xl lg:text-7xl">
            con STRUCX
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-500">Únete al equipo</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-tight text-slate-950 sm:text-5xl">
              ¿Interesado en trabajar con nosotros?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Siempre estamos abiertos a conectar con profesionales cualificados. Envíanos tu información y tendremos tu perfil en cuenta para futuras oportunidades.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="block size-2 bg-amber-400" />
                  <p className="mt-4 text-lg font-black text-slate-950">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="border border-slate-200 bg-slate-50 p-5 shadow-xl shadow-slate-950/10 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black text-slate-800">Nombre completo *</span>
                <input className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100" type="text" name="fullName" placeholder="Tu nombre" />
              </label>
              <label className="block">
                <span className="text-sm font-black text-slate-800">Email *</span>
                <input className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100" type="email" name="email" placeholder="tu@email.com" />
              </label>
              <label className="block">
                <span className="text-sm font-black text-slate-800">Teléfono</span>
                <input className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100" type="tel" name="phone" placeholder="+34 600 000 000" />
              </label>
              <label className="block">
                <span className="text-sm font-black text-slate-800">Ciudad</span>
                <input className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100" type="text" name="city" placeholder="Madrid" />
              </label>
              <label className="block">
                <span className="text-sm font-black text-slate-800">Especialidad</span>
                <select className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100" name="specialty" defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-black text-slate-800">Experiencia</span>
                <select className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100" name="experience" defaultValue="">
                  <option value="" disabled>
                    Selecciona experiencia
                  </option>
                  {experienceOptions.map((experience) => (
                    <option key={experience} value={experience}>
                      {experience}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-black text-slate-800">Mensaje</span>
                <textarea className="mt-2 min-h-36 w-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100" name="message" placeholder="Cuéntanos tu experiencia, disponibilidad y tipo de proyectos en los que has trabajado." />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-black text-slate-800">Subir CV / Portfolio</span>
                <div className="mt-2">
                  <input
                    className="sr-only"
                    id="cv-upload"
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={(event) => setFileName(event.target.files?.[0]?.name || '')}
                  />
                  <label
                    htmlFor="cv-upload"
                    className="flex cursor-pointer flex-col items-center justify-center border border-dashed border-slate-300 bg-white px-5 py-8 text-center transition hover:border-amber-400 hover:bg-amber-50/40"
                  >
                    <span className="grid size-12 place-items-center rounded-full bg-slate-950 text-amber-400">
                      <UploadCloud className="size-6" />
                    </span>
                    <span className="mt-4 text-base font-black text-slate-950">
                      {fileName || 'Seleccionar CV o portfolio'}
                    </span>
                    <span className="mt-2 text-sm leading-6 text-slate-500">
                      PDF, DOC, DOCX, JPG o PNG. Tamaño y subida real pendientes de backend.
                    </span>
                  </label>
                </div>
              </label>
            </div>

            <button type="submit" className="mt-6 w-full rounded-md bg-amber-400 px-6 py-4 text-base font-black text-slate-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-300">
              Enviar candidatura
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Careers
