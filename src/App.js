import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Cursor from './Components/Cursor';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import MarqueeStrip from './Components/MarqueeStrip';
import Pillars from './Components/Pillars';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

const App = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="selection:bg-accent-pale selection:text-accent"
      >
        <Cursor />
        <Navbar />
        <main>
          <Hero />
          <MarqueeStrip />
          <Pillars />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
