 import {HeroSection} from "./component/pages/HeroSection.jsx";
 import Footer from "./component/layout/Footer.jsx";  
 import {ExperienceSection} from "./component/pages/ExperienceSection.jsx";
 import {Projectssection} from "./component/pages/Projectssection.jsx"; 
import {AwardsSection} from "./component/pages/AwardsSection.jsx";
import {AchievementsGrid } from "./component/pages/AchievementsGrid.jsx";
import {BooksGrid} from "./component/pages/BooksGrid.jsx";
import { AppointmentsSection } from "./component/pages/AppointmentsSection.jsx";
 import {ResearchSection} from "./component/pages/ResearchSection.jsx";
 
 function App() {
 return (
    
    <div className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <Projectssection />
      <ResearchSection />
      <AwardsSection />
      <AchievementsGrid />
      <BooksGrid />
      <AppointmentsSection/>
      <Footer />
    </div>
  );
}

export default App;
