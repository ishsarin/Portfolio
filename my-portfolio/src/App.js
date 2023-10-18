import "./App.css";
import "../src/styles/MobileStyles.scss"
import "../src/styles/Projectstyles.css";
import NavBar from "./components/navBar";
import HomeSection from "./components/HomeSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { MobileNavBar } from "./components/MobileNavBar";

import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <div className="top-section">
      <NavBar />
      <HomeSection />
      <AboutMe />
      <Experience/>
      <Projects />
      <Footer />
      </div>
      <MobileNavBar/>
    </div>
  );
}

export default App;
