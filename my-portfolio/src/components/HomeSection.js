import React, { useContext } from "react";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiJavascript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContextProvider";
const HomeSection = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <section className={!dark ? "home-section" : "dark-home-section"} id="home">
      <div
        className={!dark ? "home-section_wrapper" : "dark-home-section_wrapper"}
      >
        <div className="home-section_content">
          <h1>
            Web <br /> Developer 👋
          </h1>

          <p>
            Hi, I'm Ish Sarin. A passionate Web Developer based in Gurgaon,
            Haryana. 📍
          </p>
          <p>
            With expertise in responsive design, robust backend development, and
            interactive user experiences, I bring your digital dreams to life.
          </p>
          <div className="home-section_links">
            <span className="linkdin">
              <a
                href="https://www.linkedin.com/in/ish-sarin-2bb285187/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={35} color="#0A66C2" />
              </a>
            </span>
            <span className="github">
              <a
                href="https://github.com/ishsarin"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare
                  size={35}
                  color={!dark ? "#333" : "mediumslateblue"}
                />
              </a>
            </span>
          </div>
        </div>

        <div className="home-section_img"></div>
      </div>
      <div className="tech-stack">
        <h3
          className="f-700"
          style={{ color: !dark ? "black" : "rgb(104, 104, 244)" }}
        >
          Tech Stack
        </h3>
        <div className="d-flex front-end">
          <h5>Front-end</h5>
          <div className="front-end_icons">
            <FaHtml5 color="red" size={40} className="react-icons" />
            <FaCss3Alt color="blue" size={40} />
            <FaReact color="aqua" size={40} className="react-icons" />
            <SiJavascript color="yellow" size={40} />
          </div>
        </div>
        <div className="d-flex back-end">
          <h5>Back-end</h5>
          <div className="back-end_icons">
            <FaNodeJs color="#008000b3" size={40} className="react-icons" />
            <DiMongodb color="green" size={40} />
            <IoLogoFirebase color="orange" size={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
