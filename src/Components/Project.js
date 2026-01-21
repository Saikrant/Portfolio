import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'HR Management Dashboard',
    type: 'Power BI Dashboard',
    image: '/assets/icons/bi.png',
    description: 'A comprehensive HR management dashboard built with Power BI that highlights key metrics and trends.',
    link: 'https://app.powerbi.com/groups/me/reports/ebe64c22-183c-42d1-b2bd-1a680bc0c206/f58ce493855600696209?experience=power-bi',
    tech: ['Power BI', 'Data Analysis']
  },
  {
    title: 'Figma Mobile App Design',
    type: 'UI/UX Design',
    image: '/assets/icons/figma.png',
    description: 'Modern mobile app designs created in Figma with a user-centric approach. Includes Todo App, Login Pages, and Finance App redesigns.',
    projects: [
      { title: 'TodoApp Design', link: 'https://www.figma.com/design/2kJ1ol4cDWqqLhv1OBUcTG/Todo-App?m=auto&t=72bOgkYQFtLvDz0Z-6' },
      { title: 'LoginPage Design', link: 'https://www.figma.com/design/onD22YPEiWzyhAI6fC0bKl/Login-Page-Design--Community-?m=auto&t=72bOgkYQFtLvDz0Z-6' },
      { title: 'Rentomojo Redesign', link: 'https://www.figma.com/design/2YK7UYxOmcNId5IZiVrKff/Rentomojo?m=auto&t=72bOgkYQFtLvDz0Z-6' },
      { title: 'Money Finance Design', link: 'https://www.figma.com/design/0nzwqXuEFnKUDXbIM4aa1r/money-application?m=auto&t=72bOgkYQFtLvDz0Z-6' }
    ],
    tech: ['Figma', 'UI/UX', 'Prototyping']
  },
  {
    title: 'Machine Learning Case Studies',
    type: 'Case Studies',
    image: '/assets/icons/dv.png',
    description: 'A collection of machine learning projects investigating datasets, visualizing trends, and building predictive models.',
    link: 'https://github.com/Saikrant/Database-ReactJS-PowerBI-MachineLearning-CaseStudies',
    tech: ['Python', 'Pandas', 'Scikit-Learn']
  }
];

const ProjectCard = ({ project }) => {
  const ref = useRef(null);

  // Spotlight effect state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  // Tilt effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    // Calculate spotlight position relative to card
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });

    // Calculate tilt values
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    // Reset tilt and spotlight
    x.set(0);
    y.set(0);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group bg-white/5 rounded-2xl border border-white/10 h-full flex flex-col overflow-hidden"
    >
      {/* Spotlight Gradient overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-30"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(56,189,248,0.1), transparent 40%)`,
        }}
      />

      {/* Image Area */}
      <div className="relative h-48 bg-black/20 flex items-center justify-center p-6 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <img
          src={project.image}
          alt={project.title}
          className="h-24 w-24 object-contain z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
          style={{ transform: "translateZ(30px)" }} // Pop out in 3D
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="absolute top-4 right-4 z-20 bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-accent border border-accent/20">
          {project.type}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col relative z-20 bg-primary/40 backdrop-blur-sm">
        <h3
          className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors"
          style={{ transform: "translateZ(20px)" }}
        >
          {project.title}
        </h3>
        <p className="text-slate-300 text-sm mb-6 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech && project.tech.map((t, i) => (
            <span key={i} className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5">#{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-auto relative z-40">
          {project.projects ? (
            <div className="w-full">
              <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wider">Sub-Projects</p>
              <div className="grid grid-cols-2 gap-2">
                {project.projects.map((sub, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); window.open(sub.link, '_blank'); }}
                    className="text-xs bg-accent/10 hover:bg-accent/20 text-accent py-2 px-3 rounded transition-colors text-left truncate border border-accent/10"
                    title={sub.title}
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <button
              onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank'); }}
              className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors group/btn"
            >
              Learn More
              <FiExternalLink className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Featured <span className="text-accent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A showcase of my technical projects, designs, and case studies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
