 
import './App.css'
import ExperienceSection from './component/pages/ExperienceSection'
import HeroSection from './component/pages/HeroSection'
import Researchsection from './component/pages/Researchsection'
import Projectssection from './component/pages/Projectssection'
import { Awardssection } from './component/pages/Awardssection'
import Footer from "./component/layout/Footer"

function App() {
  return (
    <>
      <HeroSection />
      <ExperienceSection/>
      <Projectssection/>
      <Researchsection/>
      <Awardssection/>
      <Footer/>
      
    </>
  )
}

export default App
