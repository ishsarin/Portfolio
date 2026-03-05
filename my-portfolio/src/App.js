import "./App.css";
import "../src/styles/MobileStyles.scss";
import "../src/styles/Projectstyles.css";
import AllProjects from "./components/AllProjects";
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
