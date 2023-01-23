import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects.jsx";
import SocialLinks from "./components/SocialLinks";
// import useReady from "./components/useReady";
// import LoadingPage from "./components/LoadingPage";
// import DotGroup from "./components/DotGroup";
// import { useState } from "react";
import GithubSection from "./components/GithubSection";

function App() {
  // const [selectedPage, setSelectedPage] = useState("home");

  // const { ready } = useReady(2700);

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GithubSection />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
