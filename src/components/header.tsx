import { useState } from "react";
import { useLocation } from "react-router-dom";
import {disablePageScroll, enablePageScroll} from "scroll-lock";

import { navigation } from "../constants";
import Button from "./button";
import MenuSvg from "../assets/svg/menu-svg";
import { HamburgerMenu } from "./design/header";

export default function Header() {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  function toggleNavigation() {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  }

  function handleClick() {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  }

  return (
    <div
      className={`fixed w-full top-0 z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="flex items-center w-[16rem] xl:mr-8 gap-1 font-code font-black">
          <span className="text-color-1 text-xl">{"<"}</span>
          <span>Alexandre's Portfolio</span>
          <span className=" text-color-1 text-xl">{"/>"}</span>
        </a>

        <nav
          className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg: bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#cv"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          Download CV
        </a>

        <Button className="hidden lg:flex" href="#contact" white={false}>
          Contact me
        </Button>

        <Button className="ml-auto lg:hidden" white={false} paddingX="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation}/>
        </Button>
      </div>
    </div>
  );
}
