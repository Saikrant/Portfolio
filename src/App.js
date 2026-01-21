import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import SkillHighlights from './Components/SkilHighlights';
import Contact from './Components/Contact';
import ProjectSection from './Components/Project';

const App = () => {
  return (
    <div className="bg-primary min-h-screen text-white font-sans selection:bg-accent selection:text-primary">
      <Navbar />

      <main>
        <Hero />
        <About />
        <SkillHighlights />
        <ProjectSection />
        <Contact />
      </main>
    </div>
  );
};

export default App;
