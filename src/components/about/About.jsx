import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdOutlineRuleFolder } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiance</h5>
              <small>3+ Years Working</small>
            </div>

            <div className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clints</h5>
              <small>50+ Worldwide</small>
            </div>

            <div className="about__card">
              <MdOutlineRuleFolder className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </div>
          </div>
          <p>I am a student of BS Computer Science at University of agriculture Faisalabad. I always strive to learn new skills and improve where I am lacking. My goal is to work with an organization. I am a graphic designer with the three year of experience and also a web developer. I have completed a many project as a graphic designer.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
