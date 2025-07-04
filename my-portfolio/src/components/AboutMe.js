import React from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from "react";
const AboutMe = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme-wrapper">
        <div className="aboutme-img"></div>
        <div className={!dark ? "aboutme-content" : "dark-aboutme-content"}>
          <h4>ABOUT ME</h4>
          <p>A dedicated Web Developer based in Gurgaon, Harayana.📍</p>
          <div>
            As a Web Developer, I possess an impressive skillset in MERN Stack
            along with JavaScript and SCSS. I can design responsive websites
            with smooth user experience. Having worked in this industry for over
            a year now, I have learnt how to write clean code along with being a
            team player who thrives in collaborating with cross-functional teams
            to produce outstanding web applications.
          </div>
          <div className="resume">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1bBkn-Gh5ayLw9N3aze3Vhga6yXUOoTS_/view?usp=sharing"
            >
              <button className="btn btn-secondary">Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="web-developer_logo"></div>
    </section>
  );
};

export default AboutMe;
