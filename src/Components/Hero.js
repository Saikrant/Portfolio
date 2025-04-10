import React from 'react';
import '../Css/Hero.css'; 

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-image">
          <div className="circle-image">
            <img src="/profile.jpg" alt="Sai Kranth Koneru" />
          </div>
        </div>
      <h1>Sai Kranth Koneru – Software Engineer </h1>
      <p>
        Building Secure, Scalable Full-Stack Applications with a Passion for Clean Code & Exceptional User Experience.
      </p>
      <p>
        Hello, I'm Sai Kranth Koneru, a Software Engineer with over 3 years of experience in developing modern web applications and RESTful services. I specialize in full-stack development using C#, .NET technologies, and JavaScript frameworks, and I'm passionate about crafting responsive user interfaces and high-impact engineering projects.
      </p>
      <a 
        href="/SaiKranthKoneru.pdf" 
        download="SaiKranthKoneru_Resume.pdf"
        className="cta-btn"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
