import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import { LuSchool } from "react-icons/lu";
import Me from "../../assets/me.jpg";
function about() {
  return (
    <section id="about">
      <h5 style={{padding:"15px"}}>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt="Your Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_card_icon" />
              <h5>Experience</h5>
              <small>No experience at all, still learning</small>
            </article>
            <article className="about_card">
              <TbSchool className="about_card_icon" />
              <h5>Degree</h5>
              <small>Undergrad</small>
            </article>
            <article className="about_card">
              <LuSchool className="about_card_icon" />
              <h5>College</h5>
              <small>Kathmandu Engineering College</small>
            </article>
          </div>
          <p>
            An aspiring software developer who wants to dive in deep into the
            world of building creative applications.
             <br/>Let's Roll with it.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
