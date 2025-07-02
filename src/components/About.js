import React from 'react';
import './About.css'; 
import aboutImage from '../assets/images/banner.jpg'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Me" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Deepak — a passionate website designer with over 5 years of experience.
            I’ve designed more than 800 websites using WordPress, Duda, HTML/CSS, and JavaScript.
            I focus on creating modern, responsive, and clean websites that help businesses grow online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;