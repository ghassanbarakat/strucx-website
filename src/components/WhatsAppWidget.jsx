function WhatsAppLogo(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16.02 3.2A12.67 12.67 0 0 0 5.28 22.6L3.9 28.8l6.33-1.46A12.67 12.67 0 1 0 16.02 3.2Zm0 22.98c-1.86 0-3.68-.5-5.27-1.45l-.38-.22-3.75.86.82-3.65-.25-.39a10.3 10.3 0 1 1 8.83 4.85Zm5.93-7.73c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.45 5.47 4.83.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z"
      />
    </svg>
  )
}

function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/34600123456?text=Hola%20StrucX%2C%20quiero%20consultar%20un%20proyecto%20en%20Madrid."
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-slate-950/25 transition hover:-translate-y-1 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-green-200"
    >
      <WhatsAppLogo className="size-9" />
    </a>
  )
}

export default WhatsAppWidget
