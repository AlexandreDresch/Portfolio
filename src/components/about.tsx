import { aboutContent } from "../constants";
import Section from "./section";

import brain from "../assets/brain-white.svg";

export default function About() {
  function openInNewTab(url: string) {
    window.open(url, "_blank");
  }

  return (
    <Section
      id="about"
      className="pt-[12rem] -mt-[5.25rem]"
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
                    <p className="body-2 mt-3 ml-11 text-n-4">{item.text}</p>
                  )}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[38rem]">
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                    <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                        <div>
                            <img src={brain} width={48} alt="Brain" />
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
