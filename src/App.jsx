import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppWidget from './components/WhatsAppWidget'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'
import RequestServicePage from './pages/RequestServicePage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/sectores" element={<IndustriesPage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/sobre-nosotros" element={<AboutPage />} />
        <Route path="/trabaja-con-nosotros" element={<CareersPage />} />
        <Route path="/solicitar-servicio" element={<RequestServicePage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}

export default App
