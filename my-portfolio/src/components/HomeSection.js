import React from "react";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
const HomeSection = () => {
  return (
    <div className="home-section_wrapper">
      <div className="home-section_content">
        <h1>Front End Web Developer 👋</h1>

        <p>
          Hi, I'm Ish Sarin. A passionate Web Developer based in Gurgaon,
          Haryana📍
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
  );
};

export default HomeSection;
