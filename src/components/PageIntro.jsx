function PageIntro({ eyebrow, title, text }) {
  return (
    <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">{eyebrow}</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {text && <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{text}</p>}
      </div>
    </section>
  )
}

export default PageIntro
