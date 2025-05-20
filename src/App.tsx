import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';
import CertificatesSection from './components/sections/CertificatesSection';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Layout>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificatesSection />
          <ExperienceSection />
          <ContactSection />
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
