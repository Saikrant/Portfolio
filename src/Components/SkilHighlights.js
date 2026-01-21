import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Full-Stack Development",
    skills: [
      { name: "C#", icon: "/assets/icons/icons8-c-sharp-logo-64.png" },
      { name: "ASP.NET", icon: "/assets/icons/icons8-.net-framework-48.png" },
      { name: "ReactJS", icon: "/assets/icons/icons8-react-native-24.png" },
      { name: "Python", icon: "/assets/icons/icons8-python-48.png" }
    ]
  },
  {
    category: "UI/UX Design",
    skills: [
      { name: "Figma", icon: "/assets/icons/icons8-figma-48.png" },
      { name: "Adobe XD", icon: "/assets/icons/icons8-adobe-xd-48.png" },
      { name: "Framer", icon: "/assets/icons/framer.svg" }
    ]
  },
  {
    category: "Data Analysis & Visualization",
    skills: [
      { name: "Power BI", icon: "/assets/icons/icons8-power-bi-2021-48.png" },
      { name: "Tableau", icon: "/assets/icons/icons8-tableau-software-48.png" },
      { name: "Pandas", icon: "/assets/icons/icons8-pandas-48.png" }
    ]
  },
  {
    category: "DevOps",
    skills: [
      { name: "Azure", icon: "/assets/icons/icons8-azure-48.png" },
      { name: "Git", icon: "/assets/icons/icons8-git-48.png" },
      { name: "Docker", icon: "/assets/icons/icons8-docker-48.png" },
      { name: "Kubernetes", icon: "/assets/icons/icons8-kubernetes-48.png" }
    ]
  }
];

const MagneticCard = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2; // Magnetic strength
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const SkillHighlights = () => {
  return (
    <section id="skills" className="py-24 bg-primary relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A versatile toolset refined through years of building secure, scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((group, idx) => (
            <MagneticCard key={idx}>
              <div
                className="h-full bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-accent/40 transition-colors duration-300 group shadow-lg"
              >
                <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-3 group-hover:text-accent transition-colors">
                  {group.category}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {group.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/20 hover:bg-black/40 transition-all hover:scale-105"
                    >
                      <div className="relative w-10 h-10 mb-2">
                        {/* Glow under icon */}
                        <div className="absolute inset-0 bg-accent/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="relative w-full h-full object-contain"
                          onError={(e) => { e.target.style.display = 'none' }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 font-medium group-hover:text-white transition-colors text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillHighlights;
