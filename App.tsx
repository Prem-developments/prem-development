
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';


type ViewType = {
  type: 'portfolio' | 'demo';
  projectId?: string;
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>({ type: 'portfolio' });
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : true;
    }
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (view.type !== 'portfolio') return;

    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const openDemo = (projectId: string) => {
    setView({ type: 'demo', projectId });
    window.scrollTo(0, 0);
  };

  const closeDemo = () => {
    setView({ type: 'portfolio' });
  };

  if (view.type === 'demo' && view.projectId) {
    return <LandingPage projectId={view.projectId} onClose={closeDemo} />;
  }

  return (
    <div className="min-h-screen relative bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar activeSection={activeSection} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="min-h-screen flex items-center pt-20">
          <Hero />
        </section>

        <section id="experience" className="py-24">
          <Experience />
        </section>

        <section id="projects" className="py-24">
          <Projects onShowDemo={openDemo} />
        </section>

        <section id="skills" className="py-24">
          <Skills />
        </section>

        <section id="education" className="py-24">
          <Education />
        </section>

        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>

      <Footer />
      {/* AI Assistant Integration */}
     
    </div>
  );
};

export default App;
