import React from "react";
import NavBar from "./navBar";
import HomeSection from "./HomeSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import { MobileNavBar } from "./MobileNavBar";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <>
      <div className="top-section">
        <NavBar />
        <HomeSection />
        <AboutMe />
        <Experience />
        <Projects />
      </div>
      <MobileNavBar />
      <Footer />
    </>
  );
};

export default HomePage;
