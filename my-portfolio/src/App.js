import "./App.css";
import "../src/styles/Projectstyles.css";
import NavBar from "./components/navBar";
import HomeSection from "./components/HomeSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App" id="home">
      <NavBar />
      <HomeSection />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
