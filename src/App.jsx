import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceJourney from "./components/ExperienceJourney";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <ThemeToggle />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceJourney />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;