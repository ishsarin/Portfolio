import React from "react";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiJavascript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
const HomeSection = () => {
  return (
    <>
      <div className="home-section_wrapper">
        <div className="home-section_content">
          <h1>
            Web <br /> Developer 👋
          </h1>

          <p>
            Hi, I'm Ish Sarin. A passionate Web Developer based in Gurgaon,
            Haryana. 📍
          </p>
          <div className="home-section_links">
            <span className="linkdin">
              <FaLinkedin size={35} />
            </span>
            <span className="github">
              <FaGithubSquare size={35} />
            </span>
          </div>
        </div>

        <div className="home-section_img"></div>
      </div>
      <div className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="d-flex front-end">
          <h4>Front-end</h4>
          <FaHtml5 color="red" size={40} />
          <FaCss3Alt color="blue" size={40} />
          <FaReact color="aqua" size={40} />
          <SiJavascript color="yellow" size={40} />
        </div>
        <div className="d-flex back-end">
          <h4>Back-end</h4>
          <FaNodeJs color="#008000b3" size={40} />
          <DiMongodb color="green" size={40} />
        </div>
      </div>
    </>
  );
};

export default HomeSection;
