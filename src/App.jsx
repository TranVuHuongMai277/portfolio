import NavBar from './components/NavBar'
import Experience from './sections/ExperienceSection'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import TechStack from './sections/TechStack'
import Certifications from './sections/Certifications'
const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowcaseSection />
      <Experience />
      <TechStack/>
      <Certifications />
      <Contact />
      <Footer />
    </> 
  )
}

export default App