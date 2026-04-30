function ServiceCard({ service, index }) {
  return (
    <article className="flex min-w-[300px] max-w-[350px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <img src={service.image} alt={service.imageAlt} className="h-52 w-full object-cover" />

      <div className="flex grow flex-col p-6">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-500">0{index + 1}</p>
        <h3 className="mt-4 text-2xl font-black uppercase leading-tight text-gray-950">{service.title}</h3>
        <p className="mt-4 text-base leading-7 text-gray-600">{service.description}</p>
        <ul className="mt-6 grid gap-3">
          {service.capabilities.map((capability) => (
            <li key={capability} className="flex gap-3 text-sm font-bold leading-6 text-gray-800">
              <span className="mt-2 size-2 shrink-0 bg-amber-400" />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ServiceCard
