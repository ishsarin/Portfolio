import React from "react";

const AboutMe = () => {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme-wrapper">
        <div className="aboutme-img"></div>
        <div className="aboutme-content">
          <h4>ABOUT ME</h4>
          <p>A dedicated Web Developer based in Gurgaon, Harayana. 📍</p>
          <div>
            As a Web Developer, I possess an impressive skillset in MERN Stack
            along with JavaScript and SCSS. I can design responsive websites
            with smooth user experience. Having a work experience of more than 6
            months I have learnt how to write clean code along with being a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.{" "}
          </div>
          <div className="resume">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1wSL8NE0Jv_FNcjaYLSSlXhVxjJyL3YgO/view?usp=sharing"
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
