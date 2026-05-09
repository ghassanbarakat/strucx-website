import { useState } from 'react'
import { ImagePlus } from 'lucide-react'

const propertyTypes = ['Local comercial', 'Oficina', 'Comunidad residencial', 'Nave industrial', 'Vivienda', 'Otro']

const serviceTypes = [
  'Electricidad',
  'Fontanería',
  'HVAC / Climatización',
  'Reforma integral',
  'Mantenimiento',
  'Construcción comercial',
  'Varios oficios',
  'Otro',
]

const urgencyLevels = ['Estándar 3-5 días', 'Prioritario 24-48h', 'Urgente mismo día']

function RequestService() {
  const [photoNames, setPhotoNames] = useState([])
  const [status, setStatus] = useState({ type: '', message: '' })

  const handlePhotoChange = (event) => {
    const files = Array.from(event.target.files || []).slice(0, 4)
    setPhotoNames(files.map((file) => file.name))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: 'loading', message: 'Enviando solicitud...' })

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    delete payload.photos

    try {
      const response = await fetch('/api/request-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok) {
        setStatus({ type: 'error', message: result.message || 'No se pudo enviar la solicitud.' })
        return
      }

      event.currentTarget.reset()
      setPhotoNames([])
      setStatus({ type: 'success', message: result.message || 'Solicitud enviada correctamente.' })
    } catch {
      setStatus({ type: 'error', message: 'No se pudo conectar con el servidor.' })
    }
  }

  return (
    <main className="bg-white">
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-500">StrucX</p>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.98] tracking-tight text-slate-950 sm:text-6xl lg:text-8xl">
            Solicitar <span className="text-slate-300">Servicio.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Gestionamos construcción, reformas, mantenimiento, electricidad, fontanería, climatización e intervenciones comerciales en España. Revisamos cada solicitud en 24/48h para definir el siguiente paso.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <form className="mx-auto max-w-6xl overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-950/10" onSubmit={handleSubmit}>
          <div className="bg-slate-950 px-6 py-6 text-white sm:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-300">Solicitud de servicio</p>
              <p className="text-sm font-bold text-slate-300">* Obligatorio</p>
            </div>
          </div>

          <div className="space-y-10 p-6 sm:p-8 lg:p-10">
            <FormSection title="Información de contacto">
              <Field label="Empresa / Comunidad *" name="empresa" placeholder="Nombre de empresa o comunidad" />
              <Field label="Nombre de contacto *" name="nombre" placeholder="Persona de contacto" required />
              <Field label="Teléfono *" name="telefono" type="tel" placeholder="+34 600 000 000" />
              <Field label="Email *" name="email" type="email" placeholder="contacto@empresa.com" required />
            </FormSection>

            <FormSection title="Detalles de la propiedad">
              <Field label="Dirección del inmueble *" name="direccion" placeholder="Calle, número, planta o local" />
              <Field label="Ciudad *" name="ciudad" placeholder="Madrid" />
              <Field label="Código postal" name="codigo_postal" placeholder="28000" />
              <SelectField label="Tipo de propiedad" name="tipo_propiedad" options={propertyTypes} placeholder="Selecciona una opción" />
            </FormSection>

            <FormSection title="Solicitud de servicio">
              <SelectField label="Tipo de servicio" name="tipo_servicio" options={serviceTypes} placeholder="Selecciona un servicio" />
              <SelectField label="Nivel de urgencia" name="urgencia" options={urgencyLevels} placeholder="Selecciona urgencia" />
            </FormSection>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">Descripción</p>
              <label className="mt-5 block">
                <span className="text-sm font-black text-slate-800">Detalles del trabajo</span>
                <textarea
                  className="mt-2 min-h-40 w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                  name="mensaje"
                  required
                  placeholder="Describe el trabajo necesario, ubicación dentro del inmueble y cualquier detalle relevante..."
                />
              </label>
            </div>

            <input className="hidden" type="text" name="website" tabIndex="-1" autoComplete="off" />

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">Fotos</p>
              <div className="mt-5">
                <input
                  id="request-photos"
                  className="sr-only"
                  type="file"
                  name="photos"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoChange}
                />
                <label
                  htmlFor="request-photos"
                  className="flex min-h-44 cursor-pointer flex-col items-center justify-center border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center transition hover:border-amber-400 hover:bg-amber-50/40"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-slate-950 text-amber-400">
                    <ImagePlus className="size-6" />
                  </span>
                  <p className="mt-4 text-lg font-black text-slate-950">Arrastra y suelta imágenes aquí</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">o</p>
                  <span className="mt-4 rounded-md bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800">
                    Buscar archivos
                  </span>
                  <p className="mt-4 text-sm font-semibold text-slate-500">{photoNames.length} de 4</p>
                </label>
                {photoNames.length > 0 && (
                  <ul className="mt-4 grid gap-2">
                    {photoNames.map((name) => (
                      <li key={name} className="border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">
                        {name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {status.message && (
              <p className={`border px-4 py-3 text-sm font-bold ${status.type === 'error' ? 'border-red-200 bg-red-50 text-red-700' : 'border-emerald-200 bg-emerald-50 text-emerald-700'}`}>
                {status.message}
              </p>
            )}

            <button type="submit" className="w-full rounded-md bg-amber-400 px-6 py-4 text-base font-black text-slate-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-300">
              ENVIAR SOLICITUD
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

function FormSection({ title, children }) {
  return (
    <fieldset>
      <legend className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">{title}</legend>
      <div className="mt-5 grid gap-5 md:grid-cols-2">{children}</div>
    </fieldset>
  )
}

function Field({ label, name, type = 'text', placeholder, required = false }) {
  return (
    <label className="block">
      <span className="text-sm font-black text-slate-800">{label}</span>
      <input
        className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </label>
  )
}

function SelectField({ label, name, options, placeholder }) {
  return (
    <label className="block">
      <span className="text-sm font-black text-slate-800">{label}</span>
      <select
        className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
        name={name}
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export default RequestService
