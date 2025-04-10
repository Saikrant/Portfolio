import React from 'react';
import { motion } from 'framer-motion';
import '../Css/SkillHighlights.css';

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
      { name: "Adobe XD", icon: "/assets/icons/icons8-adobe-xd-48.png" }
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

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition:{ type: 'spring', stiffness: 80, damping: 20, delay: 0.5 }
  }
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const SkillHighlights = () => {
  return (
    <motion.section 
      id="skills" 
      className="skills-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={containerVariants}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.5 }}
      >
        Technical Skill Set
      </motion.h2>
      <div className="skill-categories">
        {skillCategories.map((group, idx) => (
          <motion.div key={idx} className="skill-category" variants={itemVariants}>
            <h3>{group.category}</h3>
            <div className="skills-grid">
              {group.skills.map((skill, index) => (
                <motion.div key={index} className="skill-item" variants={itemVariants}>
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillHighlights;
