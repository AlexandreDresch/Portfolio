import Section from "./section";

import sphere from "../assets/sphere.png";
import stars from "../assets/resume/stars.svg";
import Heading from "./heading";
import ResumeList from "./resume-list";
import { LeftLine, RightLine } from "./design/resume";

export default function Resume() {
  return (
    <Section
      id="resume"
      className="pt-[12rem] overflow-hidden"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={sphere}
            alt="Sphere"
            className="relative z-1"
            width={255}
            height={255}
          />

          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
            <img
              src={stars}
              alt="Stars"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>

        <Heading title="Download Resume" tag="Select your language" />

        <div className="relative">
            <ResumeList />
            <LeftLine />
            <RightLine />
        </div>
      </div>
    </Section>
  );
}
