import Section from "./section";
import Heading from "./heading";
import { projectsBackendAssets } from "../constants";
import Arrow from "../assets/svg/arrow";
import { GradientLight } from "./design/projects";
import { useContext } from "react";
import { ProjectsContext } from "../contexts/projects-context";
import { Project } from "../constants/types";

export default function BackendProjects() {
  const { backEndProjects, projectsLoading } = useContext(ProjectsContext);

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

      <div className="flex justify-center flex-wrap gap-6 lg:gap-10 px-5 mb-10">
        {projectsLoading
          ? Array.from({ length: 6 }).map((_, index) => {
              const projectAssets = projectsBackendAssets.find(
                (asset) => asset.id === index
              );

              const { backgroundUrl } =
                projectAssets || projectsBackendAssets[0];

              return (
                <div
                  key={index}
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-[24rem]"
                  style={{
                    backgroundImage: `url(${backgroundUrl})`,
                  }}
                >
                  <div className="relative z-2 flex flex-col justify-between w-[18rem] sm:min-w-[22rem] h-full min-h-[22rem] p-[2.4rem] animate-pulse">
                    <div className="h-6 bg-n-1/80 rounded w-3/4 mb-5"></div>
                    <div className="flex flex-col gap-0">
                      <div className="h-1 bg-n-1/80 rounded mb-6"></div>
                      <div className="h-1 bg-n-1/80 rounded mb-6"></div>
                      <div className="h-1 bg-n-1/80 rounded mb-6"></div>
                      <div className="h-1 bg-n-1/80 rounded mb-6"></div>
                      <div className="h-1 bg-n-1/80 rounded mb-6"></div>
                    </div>
                    <div className="flex items-center mt-auto">
                      <div className="bg-n-1/80 rounded w-12 h-12"></div>
                    </div>
                  </div>

                  {index % 2 === 0 && <GradientLight />}
                </div>
              );
            })
          : backEndProjects.map((project: Project) => {
              const projectAssets = projectsBackendAssets.find(
                (asset) => asset.id === project.id
              );

              const { backgroundUrl, iconUrl } =
                projectAssets || projectsBackendAssets[0];

              return (
                <div
                  key={project.id}
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-[24rem]"
                  style={{
                    backgroundImage: `url(${backgroundUrl})`,
                  }}
                >
                  <div className="relative z-2 flex flex-col justify-between h-full min-h-[22rem] p-[2.4rem]">
                    <h5 className="h2 text-[1.25rem] md:text-[1.75rem]  mb-5">
                      {project.name}
                    </h5>
                    <p className="body-2 mb-6 text-n-3">
                      {project.description}
                    </p>

                    <div className="flex items-center mt-auto">
                      <img
                        src={iconUrl}
                        width={48}
                        height={48}
                        alt={project.name}
                      />

                      <a
                        href={project.github_url}
                        target="_blank"
                        className="ml-auto flex items-center group"
                      >
                        <span className=" font-code text-xs font-bold text-n-1 uppercase tracking-wider group-hover:text-color-6 transition-colors">
                          See code
                        </span>

                        <Arrow />
                      </a>
                    </div>
                  </div>

                  {project.done && <GradientLight />}
                </div>
              );
            })}
      </div>
    </Section>
  );
}
