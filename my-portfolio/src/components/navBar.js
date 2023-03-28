import React from "react";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <h3>Sarin.Dev</h3>
          <div className="list-wrapper">
            <ul className="navbar-list">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
