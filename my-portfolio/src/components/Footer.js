import React, { useContext } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContextProvider";
const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  const { dark } = useContext(ThemeContext);

  return (
    <>
      <section className={!dark ? "footer" : "dark-footer"} id="contact">
        <div className="footer-container">
          <div>CONTACT ME</div>
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ish-sarin-2bb285187/"
            >
              <AiFillLinkedin size={40} color="#0A66C2" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ishsarin"
            >
              <AiFillGithub
                size={40}
                color={!dark ? "#333" : "mediumslateblue"}
                className="footer_icons"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/ishsarin2000"
            >
              <BsTwitter size={40} color="00ACEEE" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:ishsarin2000@gmail.com"
            >
              <AiFillMail size={40} color="#2296dd" className="footer_icons" />
            </a>
          </p>
        </div>
      </section>
      <div className="copy-rights">
        Copyright © <span>{year}</span>. All rights are reserved
      </div>
    </>
  );
};

export default Footer;
