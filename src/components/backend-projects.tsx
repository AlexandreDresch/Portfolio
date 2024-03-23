import Section from "./section";
import Heading from "./heading";
import { projectsBackend } from "../constants";
import Arrow from "../assets/svg/arrow";
import { GradientLight } from "./design/projects";

export default function BackendProjects() {
  return (
    <Section
      id="backend"
      className="pt-[6rem]"
      crosses={false}
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings={false}
    >
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="BackEnd Projects"
        />
      </div>

      <div className="flex justify-center flex-wrap gap-10 px-5 mb-10">
        {projectsBackend.map((project) => (
          <div
            key={project.id}
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-[24rem]"
            style={{
              backgroundImage: `url(${project.backgroundUrl})`,
            }}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
              <h5 className="h2 text-[1.25rem] md:text-[1.75rem]  mb-5">{project.title}</h5>
              <p className="body-2 mb-6 text-n-3">{project.text}</p>

              <div className="flex items-center mt-auto">
                <img
                  src={project.iconUrl}
                  width={48}
                  height={48}
                  alt={project.title}
                />

                <a href="/" className="ml-auto flex items-center group">
                  <span className=" font-code text-xs font-bold text-n-1 uppercase tracking-wider group-hover:text-color-6 transition-colors">
                    See code
                  </span>

                  <Arrow />
                </a>
              </div>
            </div>

            {project.light && <GradientLight />}
          </div>
        ))}
      </div>
    </Section>
  );
}
