import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ToolsSection } from './components/ToolsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileMenu } from './components/MobileMenu';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B0F19' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ 
        backgroundColor: 'rgba(11, 15, 25, 0.8)',
        borderColor: 'rgba(0, 209, 255, 0.1)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h2 className="text-xl font-bold" style={{ color: '#00D1FF' }}>NB</h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['About', 'Skills', 'Education', 'Projects', 'Tools', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="px-3 py-2 rounded-md transition-colors hover:bg-white/5"
                    style={{ color: '#fff' }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md transition-colors hover:bg-white/5"
                style={{ color: '#00D1FF' }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onNavigate={scrollToSection} />

      {/* Main Content */}
      <main>
        <HeroSection onNavigate={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ToolsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
