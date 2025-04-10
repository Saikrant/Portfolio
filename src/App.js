import React from 'react';
import Navbar from './Components/Navbar';  // Import Navbar component
import Hero from './Components/Hero'; // Import the Hero component
import About from './Components/About';
import SkillHighlights from './Components/SkilHighlights';
import Contact from './Components/Contact';
import ProjectSection from './Components/Project';
import './App.css'; // Import global styles

const App = () => {
  return (
    <div className="App">
      <Navbar />

      {/* Home Section */}
      <section id="hero" className="section">
      <Hero />

      </section>

      {/* About Section */}
      <section id="about" className="section">
    <About/>
    <SkillHighlights/>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
      <ProjectSection/>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
     <Contact/>
      </section>
    </div>
  );
};

export default App;
