import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects.jsx";
import SocialLinks from "./components/SocialLinks";
import useReady from "./components/useReady";
import LoadingPage from "./components/LoadingPage";

function App() {
  const { ready } = useReady(2700);
  return (
    <div>
      {ready !== true ? (
        <LoadingPage />
      ) : (
        <div>
          <NavBar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <SocialLinks />
        </div>
      )}
    </div>
  );
}

export default App;
