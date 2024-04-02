import { aboutApps, aboutContent } from "../constants";
import Section from "./section";

import brain from "../assets/brain-white.svg";
import { LeftCurve, RightCurve } from "./design/about";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

export default function About() {
  const { width } = useWindowDimensions();

  function openInNewTab(url: string) {
    window.open(url, "_blank");
  }

  return (
    <Section
      id="about"
      className="pt-[8rem] md:pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">About me</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {aboutContent.map((item) =>
              item.link ? (
                <li className="mb-3 py-3" key={item.id}>
                  <button
                    className="flex items-center"
                    onClick={() => openInNewTab(item.link)}
                  >
                    <img
                      src={item.iconUrl}
                      alt={item.title}
                      width={24}
                      height={24}
                    />

                    <h6 className="body-2 ml-5">{item.title}</h6>
                  </button>
                </li>
              ) : (
                <li className="mb-3 py-3" key={item.id}>
                  <div className="flex items-center">
                    <img
                      src={item.iconUrl}
                      alt={item.title}
                      width={24}
                      height={24}
                    />

                    <h6 className="body-2 ml-5">{item.title}</h6>
                  </div>

                  {item.text && (
                    <p className="body-2 mt-3 ml-11 text-n-4 max-w-[19rem]">{item.text}</p>
                  )}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[38rem]">
          <div className="relative mt-4 left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center h-full bg-n-8 rounded-full">
                  <img src={brain} width={48} height={48} alt="Brain" />
                </div>
              </div>
            </div>

            <ul>
              {aboutApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex size-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      src={app.icon}
                      alt={app.title}
                      width={app.width}
                      height={app.height}
                      className="rounded-md m-auto"
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />

            {
              width > 1518 && <RightCurve />
            }
          </div>
        </div>
      </div>
    </Section>
  );
}
