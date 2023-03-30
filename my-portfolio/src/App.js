import "./App.css";
import NavBar from "./components/navBar";
import HomeSection from "./components/HomeSection";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeSection />
      <AboutMe />
    </div>
  );
}

export default App;
