function SectionHeading({ eyebrow, title, text, align = 'left', tone = 'light' }) {
  const isCenter = align === 'center'
  const isDark = tone === 'dark'

  return (
    <div className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-500">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-lg leading-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>}
    </div>
  )
}

export default SectionHeading
