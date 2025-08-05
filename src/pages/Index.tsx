import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CertificatesSection from '@/components/CertificationsSection';
import ExtraCurricularSection from '@/components/ExtraCurricularSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <ExtraCurricularSection/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
