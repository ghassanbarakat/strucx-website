# StrucX Website

Sitio web premium para una empresa de construcción, reformas, instalaciones y mantenimiento en Madrid. Construido con Vite, React y Tailwind CSS.

## Estructura del proyecto

```text
strux-website/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── IndustriesPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── WhatWeDo.jsx
│       ├── Services.jsx
│       ├── Process.jsx
│       ├── Projects.jsx
│       ├── ServiceAreas.jsx
│       ├── WhyChoose.jsx
│       ├── Industries.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── PageIntro.jsx
│       ├── ScrollToTop.jsx
│       └── SectionHeading.jsx
└── public/
    ├── favicon.svg
    └── icons.svg
```

## Instalación

1. Abre la carpeta del proyecto en VS Code.
2. Instala dependencias:

```bash
npm install
```

3. Ejecuta el servidor local:

```bash
npm run dev
```

4. Abre la URL que muestra Vite:

```text
http://localhost:5173
```

## Tailwind CSS

Tailwind está instalado con el plugin oficial para Vite:

```bash
npm install tailwindcss @tailwindcss/vite
```

Archivos de configuración:

```text
tailwind.config.js
vite.config.js
src/index.css
```

`src/index.css` importa Tailwind:

```css
@config "../tailwind.config.js";
@import "tailwindcss";
```

## Archivos principales

- `src/main.jsx`: punto de entrada React.
- `src/App.jsx`: define las rutas principales con React Router.
- `src/pages/*`: páginas separadas para Inicio, Servicios, Sectores, Proyectos, Sobre Nosotros y Contacto.
- `src/components/Header.jsx`: navegación sticky con enlaces entre páginas y CTA.
- `src/components/Hero.jsx`: hero principal con indicadores de confianza.
- `src/components/WhatWeDo.jsx`: posicionamiento operativo.
- `src/components/Services.jsx`: servicios principales.
- `src/components/Process.jsx`: proceso de ejecución.
- `src/components/Projects.jsx`: portfolio.
- `src/components/ServiceAreas.jsx`: áreas de servicio en Madrid.
- `src/components/WhyChoose.jsx`: argumentos de confianza.
- `src/components/Industries.jsx`: sectores.
- `src/components/Contact.jsx`: formulario y datos mock.
- `src/components/Footer.jsx`: contacto, navegación y legales.

## Rutas

```text
/                  Inicio
/servicios         Servicios
/sectores          Sectores
/proyectos         Proyectos
/sobre-nosotros    Sobre Nosotros
/contacto          Contacto / Solicitar Presupuesto
```

## Comandos

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Mejoras recomendadas

- Conectar el formulario a un backend o CRM.
- Sustituir imágenes remotas por fotografía propia optimizada.
- Añadir páginas legales reales antes de publicar.
- Crear páginas específicas por servicio y zona de Madrid para SEO.
- Añadir analítica de conversiones para llamadas y formularios.
