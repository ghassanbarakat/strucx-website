const industries = [
  {
    tag: 'Retail',
    title: 'Retail y centros comerciales',
    description:
      'StrucX coordina reformas, mantenimiento e intervenciones técnicas en espacios comerciales activos, minimizando interrupciones y protegiendo la continuidad de venta.',
    bullets: ['Horarios coordinados', 'Aperturas y adecuaciones', 'Reparaciones prioritarias'],
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Interior de espacio retail moderno',
  },
  {
    tag: 'Oficinas',
    title: 'Oficinas corporativas',
    description:
      'Ejecutamos reformas, redistribuciones, instalaciones y mantenimiento en oficinas con planificación por fases, limpieza operativa y comunicación clara.',
    bullets: ['Trabajo por fases', 'Instalaciones técnicas', 'Continuidad operativa'],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Oficina corporativa con zonas de trabajo',
  },
  {
    tag: 'Industrial',
    title: 'Industrial y logística',
    description:
      'Intervenciones técnicas para naves, almacenes y espacios logísticos donde la seguridad, el acceso y los plazos condicionan cada decisión.',
    bullets: ['Soporte a instalaciones', 'Coordinación de seguridad', 'Mantenimiento correctivo'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Almacén logístico con estanterías industriales',
  },
  {
    tag: 'Comunidades',
    title: 'Comunidades residenciales',
    description:
      'Gestionamos reparaciones, mantenimiento y mejoras en zonas comunes con trazabilidad, comunicación para administradores y ejecución ordenada.',
    bullets: ['Zonas comunes', 'Registro de incidencias', 'Comunicación con administración'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Edificio residencial urbano',
  },
  {
    tag: 'Sanidad',
    title: 'Sanidad y clínicas',
    description:
      'Actuaciones técnicas en espacios sensibles donde el control de tiempos, limpieza, acceso y documentación son parte esencial del servicio.',
    bullets: ['Planificación precisa', 'Control de acceso', 'Cierre documentado'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Clínica moderna con pasillo sanitario',
  },
  {
    tag: 'Financiero',
    title: 'Entidades financieras',
    description:
      'Intervenciones en oficinas bancarias y espacios de atención donde la imagen, la seguridad, los tiempos y la discreción son críticos.',
    bullets: ['Intervenciones discretas', 'Acabados profesionales', 'Coordinación fuera de horario'],
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Espacio financiero corporativo',
  },
]

function Industries() {
  return (
    <section id="sectores" className="bg-white">
      <div className="relative isolate flex min-h-[560px] items-center justify-center overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=85"
          alt="Obra comercial con estructura y equipo técnico"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-slate-950/78" />
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-300">Sectores</p>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Construido para cada sector.
          </h1>
          <p className="mt-5 text-3xl font-black uppercase tracking-tight text-white/45 sm:text-4xl lg:text-5xl">
            De principio a fin.
          </p>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-200">
            Cada entorno exige una forma distinta de ejecutar: accesos, horarios, continuidad de actividad, seguridad y documentación. StrucX adapta la coordinación al sector y al activo.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10"
            >
              <div className="overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.imageAlt}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-500">{industry.tag}</p>
                <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-slate-950">{industry.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{industry.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {industry.bullets.map((bullet) => (
                    <span key={bullet} className="border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-black uppercase tracking-wide text-slate-700">
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
