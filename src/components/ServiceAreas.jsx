import SectionHeading from './SectionHeading'

const areas = [
  'Madrid capital',
  'Zona norte',
  'Zona sur',
  'Corredor del Henares',
  'Zona oeste',
  'Polígonos y parques empresariales',
]

function ServiceAreas() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading
          eyebrow="Cobertura"
          title="Servicio exclusivo en Madrid"
          text="Actualmente StrucX opera solo en la Comunidad de Madrid. Priorizamos locales comerciales, oficinas, espacios industriales, clínicas, entidades financieras y carteras multi-propiedad."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {areas.map((area) => (
            <div key={area} className="border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-950/10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-600">Comunidad de Madrid</p>
              <h3 className="mt-3 text-2xl font-black text-slate-950">{area}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas
