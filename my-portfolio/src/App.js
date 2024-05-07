import "./App.css";
import "../src/styles/MobileStyles.scss";
import "../src/styles/Projectstyles.css";
import NavBar from "./components/navBar";
import HomeSection from "./components/HomeSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { MobileNavBar } from "./components/MobileNavBar";
import AllProjects from "./components/AllProjects";
import Experience from "./components/Experience";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContextProvider";
import { useContext } from "react";
function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={!dark ? "App" : "dark-App"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allprojects" element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
