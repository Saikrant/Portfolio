import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../Components/Contact.css';

const FullScreenContact = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  // Remove the once: true option so it re-checks every time
  const isInView = useInView(ref, { margin: '-100px', once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      // Optionally, you can reset to hidden when leaving view
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 20, delay: 0.5 }
    }
  };

  return (
    <section id="contact" className="full-screen-contact" ref={ref}>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <h2>Let's Connect</h2>
        <p>I’d love to hear from you! Drop a message or connect with me on social media.</p>
        <div className="contact-info">
          <a href="mailto:saikranth1219@gmail.com" className="contact-link">
            <FaEnvelope className="contact-icon" />
            <span>Email</span>
          </a>
          <a href="tel:+19704122140" className="contact-link">
            <FaPhone className="contact-icon" />
            <span>Call Me</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ksaikranth-k/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Saikrant/Database-ReactJS-PowerBI-MachineLearning-CaseStudies"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FullScreenContact;
