import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
export const MobileNavBar = () => {
  // const { dark } = useContext(ThemeContext);
  // const { setDark } = useContext(ThemeContext);
  return (
    <div className="mobile-nav">
      <div>
        <ul className="mobile-nav-list">
          {/* <li>
            <a
              className="theme"
              onClick={() => {
                setDark(!dark);
              }}
            >
              <li>
                {!dark ? <MdDarkMode size={15} /> : <CiLight size={15} />}
              </li>
            </a>
          </li> */}
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutme">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
