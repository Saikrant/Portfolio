import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const skills = [
  "/assets/icons/icons8-react-native-24.png",
  "/assets/icons/icons8-c-sharp-logo-64.png",
  "/assets/icons/icons8-python-48.png",
  "/assets/icons/icons8-azure-48.png",
  "/assets/icons/icons8-docker-48.png",
  "/assets/icons/icons8-figma-48.png",
  "/assets/icons/icons8-git-48.png",
  "/assets/icons/icons8-.net-framework-48.png"
];

const Typewriter = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span>{displayedText}</span>;
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-primary">
      {/* Dynamic Background Grid & Particles */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-accent/30 rounded-full blur-[120px] mix-blend-screen" />

      {/* Circular Rotating Skills Background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
        <motion.div
          className="relative w-[650px] h-[650px] rounded-full border border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.1)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {skills.map((skill, i) => {
            const angle = (i / skills.length) * 360;
            const radius = 325; // Half of width/height
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={i}
                className="absolute w-14 h-14 bg-primary/90 backdrop-blur-md p-3 rounded-full border border-accent/20 shadow-[0_0_15px_rgba(56,189,248,0.3)] flex items-center justify-center"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(${x - 28}px, ${y - 28}px) rotate(${-angle}deg)`
                }}
              >
                <motion.img
                  src={skill}
                  alt="skill"
                  className="w-full h-full object-contain filter brightness-125"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                />
              </div>
            );
          })}
        </motion.div>
        {/* Inner ring for depth */}
        <div className="absolute w-[450px] h-[450px] rounded-full border border-white/5 opacity-30" />
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left relative"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-green-400 tracking-wide uppercase">Available for work</span>
            </div>

            {/* Role Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm shadow-[0_0_10px_rgba(56,189,248,0.1)]">
              <span className="text-xs font-semibold text-accent tracking-wide uppercase">
                <Typewriter text="Software Engineer" />
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Hi, I'm <span className="bg-gradient-to-r from-accent via-blue-400 to-purple-500 bg-clip-text text-transparent filter drop-shadow">Sai Kranth</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed max-w-2xl mx-auto md:mx-0 font-light">
            Building secure, scalable full-stack applications with a passion for clean code & exceptional user experience.
          </p>

          {/* Quick Tech Stack Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            {['React', '.NET Core', 'Azure', 'Docker', 'SQL'].map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-md">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-accent/90 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              View Projects
            </a>
            <a
              href="/SaiKranthKoneru.pdf"
              download="SaiKranthKoneru_Resume.pdf"
              className="px-8 py-3 border border-gray-500 text-white font-medium rounded-full hover:border-accent hover:text-accent hover:bg-accent/5 transition-all flex items-center justify-center gap-2"
            >
              <FiDownload /> Download Resume
            </a>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-3xl font-bold text-white">3+</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Years Exp.</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">15+</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Master's</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Graduate</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Pulsing Glow behind profile */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-full blur-3xl opacity-40 animate-pulse duration-3000"></div>

            <div className="relative w-full h-full rounded-full p-2 border-2 border-dashed border-accent/30 animate-[spin_10s_linear_infinite]"></div>

            <img
              src="/profile.jpg"
              alt="Sai Kranth Koneru"
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-slate-800 shadow-2xl z-10"
              style={{ left: '8px', top: '8px' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
