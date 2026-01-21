import React from 'react';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Experience Column */}
          <div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-10 flex items-center gap-3">
              <span className="w-2 h-8 bg-accent rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]"></span>
              Experience
            </motion.h2>
            <div className="border-l-2 border-white/5 ml-3 space-y-12 relative">
              {/* Glowing line overlay that follows scroll could go here, but simple border-l with glow on dots is cleaner */}

              {experienceItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="relative pl-8 group">
                  {/* Glowing Dot */}
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary border-2 border-accent group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all duration-300"></div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group-hover:-translate-y-1 shadow-lg">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{item.company}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-gray-400">
                      <span className="font-semibold text-gray-300">{item.role}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{item.duration}</span>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded bg-black/20 text-accent/80 border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-10 flex items-center gap-3">
              <span className="w-2 h-8 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></span>
              Education
            </motion.h2>
            <div className="border-l-2 border-white/5 ml-3 space-y-12">
              {educationItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="relative pl-8 group">
                  {/* Glowing Dot */}
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary border-2 border-purple-500 group-hover:bg-purple-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300"></div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group-hover:-translate-y-1 shadow-lg">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{item.institution}</h3>
                    <div className="text-sm text-gray-400 mb-2">{item.duration}</div>
                    <p className="text-lg text-gray-300">{item.degree}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
