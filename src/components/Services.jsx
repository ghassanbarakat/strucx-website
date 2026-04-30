import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Electricidad',
    description:
      'Servicios eléctricos comerciales ejecutados por profesionales cualificados, con intervención ordenada, cumplimiento normativo y documentación completa.',
    capabilities: ['Diagnóstico y reparación', 'Instalaciones completas', 'Cuadros, líneas e iluminación', 'Revisión y adecuación normativa'],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Técnico revisando una instalación eléctrica comercial',
  },
  {
    title: 'Fontanería',
    description:
      'Fontanería comercial gestionada con diagnóstico preciso, coordinación técnica y ejecución documentada para locales, oficinas y activos profesionales.',
    capabilities: ['Detección de fugas', 'Saneamiento y redes interiores', 'Sustitución de elementos', 'Mantenimiento preventivo'],
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Trabajo técnico de fontanería en espacio profesional',
  },
  {
    title: 'HVAC / Climatización',
    description:
      'Instalación, reparación y mantenimiento de climatización y ventilación para espacios que necesitan continuidad operativa y confort controlado.',
    capabilities: ['Instalación de equipos', 'Mantenimiento programado', 'Reparación de incidencias', 'Ventilación y confort térmico'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Sistema técnico de climatización y ventilación',
  },
  {
    title: 'Reformas integrales',
    description:
      'Reformas de oficinas, locales y espacios de trabajo gestionadas con planificación, coordinación de oficios, control de avance y cierre documentado.',
    capabilities: ['Planificación de obra', 'Redistribución de espacios', 'Acabados profesionales', 'Coordinación de proveedores'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Equipo revisando planos de reforma comercial',
  },
  {
    title: 'Mantenimiento',
    description:
      'Soporte correctivo y recurrente para activos en Madrid que requieren respuesta técnica, trazabilidad y un único punto de coordinación.',
    capabilities: ['Intervenciones correctivas', 'Mantenimiento recurrente', 'Registro de trabajos', 'Soporte multi-activo'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Profesional realizando mantenimiento en instalación comercial',
  },
  {
    title: 'Construcción comercial',
    description:
      'Adecuación de locales, obra menor, aperturas y mejoras técnicas ejecutadas con control de alcance, comunicación clara y entrega ordenada.',
    capabilities: ['Adecuación de locales', 'Obra menor comercial', 'Mejoras técnicas', 'Entrega con documentación'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Obra comercial con maquinaria y estructura en ejecución',
  },
]

function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = services[activeIndex]
  const nextIndex = (activeIndex + 1) % services.length
  const hasPrevious = activeIndex > 0
  const hasNext = activeIndex < services.length - 1

  const prevService = () => {
    setActiveIndex((prev) => (prev === 0 ? 0 : prev - 1))
  }

  const nextService = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? prev : prev + 1))
  }

  return (
    <section id="servicios" className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_0.68fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-500">Servicios</p>
            <h2 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-[1.02] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Todos los oficios. Un solo equipo.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-gray-600">
              StrucX coordina obra, instalaciones y mantenimiento para empresas y activos profesionales en Madrid. Cada servicio se ejecuta con alcance definido, responsables claros y documentación de cierre.
            </p>
            <Link
              to="/solicitar-servicio"
              className="mt-7 inline-flex rounded-md bg-gray-950 px-6 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
            >
              Solicitar Servicio
            </Link>
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden pb-2">
          {hasPrevious && (
            <div className="pointer-events-none absolute left-0 top-16 z-0 hidden w-[30%] -translate-x-[70%] opacity-20 transition duration-500 lg:block">
              <ServicePreview service={services[activeIndex - 1]} />
            </div>
          )}

          <div className="relative z-20 mx-auto w-full max-w-5xl px-0 transition duration-500 lg:px-8">
            <article className="overflow-hidden rounded-xl border-2 border-gray-950 bg-white shadow-2xl shadow-gray-950/15 lg:grid lg:grid-cols-[1.05fr_0.95fr]">
              <img src={activeService.image} alt={activeService.imageAlt} className="h-80 w-full object-cover sm:h-[420px] lg:h-full" />
              <div className="flex min-h-[420px] flex-col justify-center p-7 sm:p-10 lg:p-12">
                <h3 className="text-4xl font-black uppercase leading-tight text-gray-950 sm:text-5xl">
                  {activeService.title}
                </h3>
                <p className="mt-6 text-lg leading-8 text-gray-600">{activeService.description}</p>
                <ul className="mt-8 grid gap-3">
                  {activeService.capabilities.map((capability) => (
                    <li key={capability} className="flex gap-3 text-base font-bold leading-7 text-gray-800">
                      <span className="mt-2 size-2 shrink-0 bg-amber-400" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>

          {hasNext && (
            <div className="pointer-events-none absolute right-0 top-16 z-0 hidden w-[30%] translate-x-[70%] opacity-20 transition duration-500 lg:block">
              <ServicePreview service={services[nextIndex]} />
            </div>
          )}

          <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
            {hasPrevious && (
              <button
                type="button"
                onClick={prevService}
                className="grid size-12 place-items-center rounded-full border border-gray-200 bg-white text-gray-950 shadow-sm transition hover:bg-amber-400"
                aria-label="Servicio anterior"
              >
                <ArrowLeft className="size-5" />
              </button>
            )}
            {hasNext && (
              <button
                type="button"
                onClick={nextService}
                className="grid size-12 place-items-center rounded-full border border-gray-200 bg-white text-gray-950 shadow-sm transition hover:bg-amber-400"
                aria-label="Siguiente servicio"
              >
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          <p className="mt-6 text-center text-sm font-black uppercase tracking-[0.22em] text-gray-500">
            {activeIndex + 1} / {services.length}
          </p>

          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 hidden h-[calc(100%-56px)] lg:block">
            {hasPrevious && (
              <button
                type="button"
                onClick={prevService}
                className="pointer-events-auto absolute left-4 top-1/2 flex h-28 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-950 shadow-lg transition hover:bg-amber-400"
                aria-label="Servicio anterior"
              >
                <ArrowLeft className="size-6" />
              </button>
            )}
            {hasNext && (
              <button
                type="button"
                onClick={nextService}
                className="pointer-events-auto absolute right-4 top-1/2 flex h-28 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-950 shadow-lg transition hover:bg-amber-400"
                aria-label="Siguiente servicio"
              >
                <ArrowRight className="size-6" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicePreview({ service }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-sm">
      <img src={service.image} alt="" className="h-72 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-black uppercase leading-tight text-gray-950">{service.title}</h3>
        <p className="mt-4 line-clamp-3 leading-7 text-gray-600">{service.description}</p>
      </div>
    </article>
  )
}

export default Services
