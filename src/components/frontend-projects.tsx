import { projectsFrontend } from "../constants";
import Heading from "./heading";
import Section from "./section";
import Tagline from "./tagline";

import grid from "../assets/grid.png";
import check from "../assets/check-02.svg";
import loading from "../assets/loading.svg";
import { Gradient } from "./design/projects";

export default function FrontendProjects() {
  return (
    <Section
      id="frontend"
      className="pt-[12rem] overflow-hidden"
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

        <div className="relative grid gap-6 -ml-2.5 xxs:-ml-0 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {projectsFrontend.map((project) => {
            const status = project.status === "done" ? "Done" : "In Progress";

            return (
              <div
                className={`flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  project.colorful ? "bg-conic-gradient" : "bg-n-6"
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
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-12 md:mb-20">
                      <Tagline>{project.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          src={project.status === "done" ? check : loading}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline text-[0.5rem] md:text-xs">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 md:-mx-15">
                      <img
                        className="w-full"
                        src={project.imageUrl}
                        width={628}
                        height={426}
                        alt={project.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{project.title}</h4>
                    <p className="body-2 text-n-4">{project.text}</p>
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
