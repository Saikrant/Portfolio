import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Components/Project.css';

// Example data for your projects
const projects = [
  { 
    title: 'HR Management Dashboard',
    type: 'Power BI Dashboard',
    image: '/assets/icons/bi.png', 
    description: 'A comprehensive HR management dashboard built with Power BI that highlights key metrics and trends. Click below to view the case study.',
    link: 'https://app.powerbi.com/groups/me/reports/ebe64c22-183c-42d1-b2bd-1a680bc0c206/f58ce493855600696209?experience=power-bi'
  },
  {
    title: 'Figma Mobile App Design',
    type: 'UI/UX Design',
    image: '/assets/icons/figma.png',
    description: 'A modern mobile app design created in Figma with a user-centric approach and beautiful, responsive layouts.',
    projects: [
      { title: 'TodoApp Design', link: 'https://www.figma.com/design/2kJ1ol4cDWqqLhv1OBUcTG/Todo-App?m=auto&t=72bOgkYQFtLvDz0Z-6' },
      { title: 'LoginPage Design', link: 'https://www.figma.com/design/onD22YPEiWzyhAI6fC0bKl/Login-Page-Design--Community-?m=auto&t=72bOgkYQFtLvDz0Z-6' },
      { title: 'Rentomojo Redesign', link: 'https://www.figma.com/design/2YK7UYxOmcNId5IZiVrKff/Rentomojo?m=auto&t=72bOgkYQFtLvDz0Z-6' },
      { title: 'Money Finance Design', link: 'https://www.figma.com/design/0nzwqXuEFnKUDXbIM4aa1r/money-application?m=auto&t=72bOgkYQFtLvDz0Z-6' }
    ]
  },
  {
    title: 'Machine Learning Case Studies',
    type: 'Case Studies',
    image: '/assets/icons/dv.png',
    description: 'A collection of machine learning projects and case studies that demonstrate data analysis, visualization, and model building.',
    link: 'https://github.com/Saikrant/Database-ReactJS-PowerBI-MachineLearning-CaseStudies'
  }
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleCard = () => {
    setExpanded(prev => !prev);
  };

  // Function to open external link (for individual Figma sub-projects or other projects)
  const openExternalLink = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div 
      className="project-card" 
      layout 
      onClick={toggleCard}
      initial={{ borderRadius: 10 }}
    >
      <motion.img 
        src={project.image} 
        alt={project.title} 
        className="project-image" 
        layout 
      />
      <motion.h3 layout>{project.title}</motion.h3>
      <motion.p className="project-type" layout>{project.type}</motion.p>
      <AnimatePresence>
        {expanded && (
          <motion.div 
            className="project-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p>{project.description}</motion.p>
            {project.projects ? (
              // Render list of sub-links (for Figma designs)
              <div className="figma-projects">
                {project.projects.map((figmaProj, index) => (
                  <motion.button 
                    key={index}
                    className="figma-project-btn"
                    onClick={(e) => openExternalLink(e, figmaProj.link)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {figmaProj.title}
                  </motion.button>
                ))}
              </div>
            ) : (
              // Render a standard external link button if available
              project.link && (
                <motion.button
                  className="view-project-btn"
                  onClick={(e) => openExternalLink(e, project.link)}
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More
                </motion.button>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.div 
        className="projects-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.5 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectSection;
