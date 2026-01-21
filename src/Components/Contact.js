import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  // Simple particle system following mouse
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden flex flex-col items-center justify-center">
      {/* Interactive Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56,189,248,0.15), transparent 80%)`
        }}
      />

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-10 inline-block p-4 rounded-full bg-accent/5 border border-accent/10 backdrop-blur-md">
            <h2 className="text-4xl md:text-5xl font-bold">Let's <span className="text-accent drop-shadow-lg">Connect</span></h2>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            I’m always open to discussing product design work or partnership opportunities.
            Let's build something amazing together.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-20">
            <a
              href="mailto:saikranth1219@gmail.com"
              className="flex items-center gap-4 px-8 py-6 bg-white/5 hover:bg-white/10 rounded-3xl transition-all hover:-translate-y-2 border border-white/5 hover:border-accent/40 group shadow-lg hover:shadow-accent/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope size={24} />
              </div>
              <div className="text-left">
                <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Email Me</span>
                <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">saikranth1219@gmail.com</span>
              </div>
            </a>

            <a
              href="tel:+19704122140"
              className="flex items-center gap-4 px-8 py-6 bg-white/5 hover:bg-white/10 rounded-3xl transition-all hover:-translate-y-2 border border-white/5 hover:border-accent/40 group shadow-lg hover:shadow-accent/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform duration-300">
                <FaPhone size={24} />
              </div>
              <div className="text-left">
                <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Call Me</span>
                <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">+1 970-412-2140</span>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-10 border-t border-white/10 pt-12">
            <a
              href="https://www.linkedin.com/in/ksaikranth-k/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077b5] transition-all hover:scale-125 transform"
            >
              <FaLinkedin size={36} />
            </a>
            <a
              href="https://github.com/Saikrant/Database-ReactJS-PowerBI-MachineLearning-CaseStudies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all hover:scale-125 transform"
            >
              <FaGithub size={36} />
            </a>
          </div>

          <div className="mt-16 text-sm text-gray-600 font-medium">
            &copy; {new Date().getFullYear()} Sai Kranth Koneru. Crafted with React & Tailwind.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
