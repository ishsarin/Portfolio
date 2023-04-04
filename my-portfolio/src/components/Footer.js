import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div>CONTACT ME</div>
        <p>
          <AiFillLinkedin size={40} />
          <AiFillGithub size={40} className="footer_icons" />
          <AiFillInstagram size={40} />
          <a href="mailto:ishsarin2000@gmail.com">
            <AiFillMail size={40} color="#212529" className="footer_icons" />
          </a>
        </p>
      </section>
      <div className="copy-rights">
        Copyright © 2023. All rights are reserved
      </div>
    </>
  );
};

export default Footer;
