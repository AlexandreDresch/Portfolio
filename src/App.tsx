import ButtonGradient from "./assets/svg/button-gradient";
import Header from "./components/header";
import Hero from "./components/hero";
import BackendProjects from "./components/backend-projects";
import About from "./components/about";
import Resume from "./components/resume";
import FrontendProjects from "./components/frontend-projects";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />

        <div id="projects">
          <FrontendProjects />
          <BackendProjects />
        </div>

        <About />
        <Resume />
      </div>

      <Footer />

      <ButtonGradient />
    </>
  );
}
