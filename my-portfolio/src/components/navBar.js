import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSection from "./HomeSection";
import AboutMe from "./AboutMe";

const NavBar = () => {
  return (
    <>
      <nav className="sticky-top navBar">
        <div className="nav-wrapper">
          <h3 style={{ fontWeight: 900 }}>Sarin.Dev</h3>
          <div className="list-wrapper">
            <ul className="navbar-list">
              <a href="#home">
                <li>Home</li>
              </a>

              <a href="#aboutme">
                {" "}
                <li>About</li>
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
