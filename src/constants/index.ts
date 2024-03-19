import homeSmile from "../assets/home-smile.svg";
import search from "../assets/search.svg";
import plusSquare from "../assets/plus-square.svg";
import file from "../assets/file.svg";

import angular from "../assets/languages/angularjs-plain.svg";
import typescript from "../assets/languages/typescript-original.svg";
import docker from "../assets/languages/docker-plain-wordmark.svg";
import go from "../assets/languages/go-original-wordmark.svg";
import javascript from "../assets/languages/javascript-original.svg";
import nodejs from "../assets/languages/nodejs-original-wordmark.svg";
import mongodb from "../assets/languages/mongodb-plain-wordmark.svg";
import reactjs from "../assets/languages/react-original-wordmark.svg";
import nextjs from "../assets/languages/nextjs-original-wordmark.svg";
import tailwindcss from "../assets/languages/tailwindcss-original-wordmark.svg";
import threejs from "../assets/languages/threejs-original-wordmark.svg";
import springboot from "../assets/languages/spring-original-wordmark.svg";
import redis from "../assets/languages/redis-plain-wordmark.svg";
import postgresql from "../assets/languages/postgresql-plain-wordmark.svg";
import nestjs from "../assets/languages/nestjs-plain-wordmark.svg";

export const navigation = [
  {
    id: "0",
    title: "About me",
    url: "#about",
  },
  {
    id: "1",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "2",
    title: "BackEnd",
    url: "#backend",
  },
  {
    id: "3",
    title: "FrontEnd",
    url: "#frontend",
  },
  {
    id: "4",
    title: "Download CV",
    url: "#cv",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Contact me",
    url: "#contact",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file, search, plusSquare];

export const languages = [
  typescript,
  javascript,
  go,
  angular,
  reactjs,
  nextjs,
  nodejs,
  nestjs,
  springboot,
  docker,
  redis,
  mongodb,
  postgresql,
  tailwindcss,
  threejs,
];
