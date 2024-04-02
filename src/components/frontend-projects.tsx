import Heading from "./heading";
import Section from "./section";
import Tagline from "./tagline";

import grid from "../assets/grid.png";
import check from "../assets/check-02.svg";
import loading from "../assets/loading.svg";
import { Gradient } from "./design/projects";
import { useContext } from "react";
import { ProjectsContext } from "../contexts/projects-context";
import { Project } from "../constants/types";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

export default function FrontendProjects() {
  const { width } = useWindowDimensions();

  const { frontEndProjects, projectsLoading } = useContext(ProjectsContext);

  return (
    <Section
      id="frontend"
      className="pt-[8rem] md:pt-[12rem] overflow-hidden"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings={false}
    >
      <div className="container">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="FrontEnd Projects"
          tag="Projects"
        />

        <div className="relative grid gap-6  xxs:-ml-0 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {projectsLoading
            ? Array.from({ length: 6 }).map((_, index) => {
                return (
                  <div
                    key={index}
                    className="flex p-0.25 rounded-[2.5rem] even:md:translate-y-[7rem] border border-n-6 bg-transparent animate-pulse"
                  >
                    <div className="relative  w-full p-8 bg-transparent rounded-[2.4375rem] overflow-hidden xl:p-15">
                      <div className="absolute top-0 left-0 max-w-full">
                        <div className="h-20 w-full bg-gray-400 rounded"></div>
                      </div>
                      <div className="relative z-1 flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between w-full md:max-w-[27rem] mb-12 md:mb-20">
                          <div className="h-4 bg-gray-400 rounded w-1/4"></div>
                          <div className="flex items-center px-4 py-1 bg-n-1 rounded w-1/4 h-4"></div>
                        </div>
                        <div className="mb-10 -my-10 max-h-96 md:h-auto md:-mx-15">
                          <div className="h-72 w-full bg-gray-400 rounded"></div>
                        </div>
                        <div className="h-4 bg-gray-400 rounded w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                        <div className="flex items-center justify-between mt-3">
                          <a className="flex items-center group h-5 bg-gray-400 rounded w-1/4"></a>
                          <a className="flex items-center group h-5 bg-gray-400 rounded w-1/4"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : frontEndProjects.map((project: Project) => {
                const status = project.done ? "Done" : "In Progress";

                return (
                  <div
                    className={`flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                      project.done ? "bg-conic-gradient" : "bg-n-6"
                    }`}
                    key={project.id}
                  >
                    <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                      <div className="absolute top-0 left-0 max-w-full">
                        <img
                          className="w-full"
                          src={grid}
                          width={550}
                          height={550}
                          alt="Grid"
                        />
                      </div>
                      <div className="relative z-1 flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between w-full md:max-w-[27rem] mb-12 md:mb-20">
                          <Tagline>{project.date}</Tagline>

                          <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                            <img
                              className="mr-2.5"
                              src={project.done ? check : loading}
                              width={16}
                              height={16}
                              alt={status}
                            />
                            <div className="tagline text-[0.5rem] md:text-xs">
                              {status}
                            </div>
                          </div>
                        </div>

                        <div className="mb-10 -my-10 max-h-96 md:h-auto md:-mx-15">
                          <img
                            className="w-full h-full object-contain"
                            src={
                              width > 768
                                ? project.images[0]
                                : project.images[1]
                            }
                            width={628}
                            height={426}
                            alt={project.name}
                          />
                        </div>

                        <h4 className="h4 mb-4">{project.name}</h4>
                        <p className="body-2 text-n-4">{project.description}</p>

                        <div className="flex items-center justify-between mt-5">
                          {project.deployment_url && (
                            <a
                              href={project.deployment_url}
                              target="_blank"
                              className="flex items-center group"
                            >
                              <span className="font-code text-sm md:text-base font-bold text-n-1 uppercase tracking-wider group-hover:text-color-6 transition-colors">
                                Visit Demo
                              </span>
                            </a>
                          )}
                          <a
                            href={project.github_url}
                            target="_blank"
                            className="flex items-center group"
                          >
                            <span className="font-code text-sm md:text-base font-bold text-n-1 uppercase tracking-wider group-hover:text-color-6 transition-colors">
                              See Code
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

          <Gradient />
        </div>
      </div>
    </Section>
  );
}
