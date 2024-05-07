import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSection from "./HomeSection";
import AboutMe from "./AboutMe";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { ThemeContext } from "../context/ThemeContextProvider";
const NavBar = () => {
  const { dark } = useContext(ThemeContext);
  const { setDark } = useContext(ThemeContext);

  return (
    <>
      <nav
        className={!dark ? "sticky-top navBar" : "sticky-top navBar dark-App"}
      >
        <div className="nav-wrapper">
          <h3 style={{ fontWeight: 900 }}>Sarin.Dev</h3>
          <div className="list-wrapper">
            <ul className={!dark ? "navbar-list" : "dark-navbar-list"}>
              <a
                className="theme"
                onClick={() => {
                  setDark(!dark);
                }}
              >
                <li>
                  {!dark ? <MdDarkMode size={25} /> : <CiLight size={25} />}
                </li>
              </a>
              <a href="#home">
                <li>Home</li>
              </a>

              <a href="#aboutme">
                {" "}
                <li>About</li>
              </a>
              <a href="#experience">
                {" "}
                <li>Experience</li>
              </a>

              <a href="#projects">
                <li>Projects</li>
              </a>

              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
