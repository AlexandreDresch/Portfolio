import { ScrollParallax } from "react-just-parallax";

import Section from "./section";
import Button from "./button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/hero";

import curve from "../assets/hero/curve.png";
import example from "../assets/hero/example.png";
import exampleMobile from "../assets/hero/example-mobile.png";
import background from "../assets/hero/background.png";
import typescript from "../assets/languages/typescript-original.svg";

import { heroIcons, languages } from "../constants";

import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { useRef } from "react";
import Notification from "./notification";

export default function Hero() {
  const { width } = useWindowDimensions();

  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Envisioning the future of technology and bringing it to life through{" "}
            <span className="inline-block relative">
              code
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Full-Stack Developer Proficient in React.js, Node.js, Next.js,
            TypeScript, and More
          </p>

          <Button href="/projects" white>
            Take a look
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={width > 768 ? example : exampleMobile}
                  alt="Example"
                  className="w-full"
                  width={1024}
                  height={490}
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] p-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5 cursor-pointer" key={index}>
                        <img src={icon} width={24} height={25} alt="Icon" />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Built with:"
                  >
                    <ul className="flex justify-between w-full items-center">
                      <li>
                        <img
                          src={typescript}
                          alt="TypeScript"
                          className="rounded-md"
                          width={72}
                          height={72}
                        />
                      </li>
                      <li>
                        <img
                          src={languages[5]}
                          alt="NextJs"
                          width={50}
                          height={25}
                        />
                      </li>

                      <li>
                        <img
                          src={languages[13]}
                          alt="TailwindCSS"
                          width={70}
                          height={35}
                        />
                      </li>
                    </ul>
                  </Notification>
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={background}
              className="w-full"
              width={1440}
              height={1800}
              alt="Hero"
            />
          </div>

          <BackgroundCircles parallaxRef={null} />
        </div>

        <div className="hidden relative z-10 mt-20 lg:block">
          <h5 className="tagline mb-6 text-center text-n-1/50">
            Helping people create beautiful content with
          </h5>

          <ul className="flex">
            {languages.map((language, index) => (
              <li className="flex items-center justify-center flex-1 h-[8.5rem" key={index}>
                <img
                  src={language}
                  alt="Language"
                  className="rounded-md"
                  width={72}
                  height={36}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
}
