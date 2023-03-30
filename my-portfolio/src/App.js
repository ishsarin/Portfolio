import "./App.css";
import "../src/styles/Projectstyles.css";
import NavBar from "./components/navBar";
import HomeSection from "./components/HomeSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeSection />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
