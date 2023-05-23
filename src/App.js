import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particles from "./utils.js/particles";
import Thesis from "./containers/thesis";
import Traffic from "./containers/traffic-monitoring";
import DocTalk from "./containers/doctalk";

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}

      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thesis" element={<Thesis />} />
        <Route path="/traffic-monitoring" element={<Traffic />} />
        <Route path="/doctalk" element={<DocTalk />} />

      </Routes>
      </div>

    </div>
  );
}

export default App;
