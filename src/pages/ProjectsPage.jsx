import PageIntro from '../components/PageIntro'
import Projects from '../components/Projects'
import Process from '../components/Process'
import ContactCTA from '../components/ContactCTA'

function ProjectsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Proyectos"
        title="Trabajos comerciales ejecutados con control y cierre documentado"
        text="Una muestra del tipo de encargos que StrucX gestiona para empresas, administradores y carteras de activos en Madrid."
      />
      <Projects />
      <Process />
      <ContactCTA />
    </main>
  )
}

export default ProjectsPage
