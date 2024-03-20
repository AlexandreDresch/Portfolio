import ButtonGradient from "./assets/svg/button-gradient";
import Header from "./components/header";
import Hero from "./components/hero";
import BackendProjects from "./components/backend-projects";
import About from "./components/about";

export default function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />

        <div id="projects">
          <BackendProjects />
        </div>

        <About />
      </div>

      <ButtonGradient />
    </>
  );
}
