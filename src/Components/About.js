import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

// Timeline data for experience items
const experienceItems = [
  {
    company: "Collins Aerospace",
    role: "Software Engineer",
    duration: "Nov 2022 – July 2024",
    description: "Developed secure, scalable web applications and RESTful services using ASP.NET Core, C#, and SQL Server.",
    skills: ["ASP.NET Core", "C#", "SQL Server", "Azure DevOps", "Docker"]
  },
  {
    company: "Starmark Software Pvt Ltd",
    role: "Associate Software Engineer",
    duration: "Aug 2021 – Nov 2022",
    description: "Built secure REST APIs and collaborated with product teams to enhance web applications.",
    skills: ["C#", "JavaScript", "ReactJS", "SQL", "Kubernetes"]
  },
  {
    company: "Traxeat",
    role: "UI/UX Designer Intern",
    duration: "Oct 2020 – Jan 2021",
    description: "Designed intuitive user interfaces and prototypes for web and mobile applications.",
    skills: ["Figma", "Adobe XD", "HTML", "CSS", "Responsive Design"]
  }
];

// Timeline data for education items
const educationItems = [
  {
    institution: "Colorado State University, Fort Collins",
    degree: "Master’s in Computer Information Systems",
    duration: "Expected Aug 2024 - Dec 2025"
  },
  {
    institution: "K.L.E Institute of Technology, India",
    degree: "Bachelor’s in Information Science",
    duration: "July 2017 - May 2021"
  }
];

// Define motion variants for individual timeline items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition:{ type: 'spring', stiffness: 80, damping: 20, delay: 0.5 }
}
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div 
        className="timelines-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        
        {/* Experience Timeline */}
        <div className="timeline-column">
          <h3 className="column-heading">Experience</h3>
          <div className="timeline">
            {experienceItems.map((item, index) => (
              <motion.div key={index} className="timeline-item" variants={itemVariants}>
                <motion.div className="timeline-marker" variants={itemVariants} />
                <motion.div className="timeline-content" variants={itemVariants}>
                  <h4 className="tooltip" data-tooltip={item.skills.join(', ')}>
                    {item.company}
                  </h4>
                  <p className="role">{item.role}</p>
                  <p className="duration">{item.duration}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Education Timeline */}
        <div className="timeline-column">
          <h3 className="column-heading">Education</h3>
          <div className="timeline">
            {educationItems.map((item, index) => (
              <motion.div key={index} className="timeline-item" variants={itemVariants}>
                <motion.div className="timeline-marker" variants={itemVariants} />
                <motion.div className="timeline-content" variants={itemVariants}>
                  <h4 style={{ color: "#007BFF" }}>{item.institution}</h4>
                  <p className="role">{item.degree}</p>
                  <p className="duration">{item.duration}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
