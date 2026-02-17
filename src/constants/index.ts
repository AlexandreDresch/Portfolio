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

import icon1 from "/assets/projects/icon-1.svg";
import icon2 from "/assets/projects/icon-2.svg";

import card1 from "/assets/projects/card-1.svg";
import card2 from "/assets/projects/card-2.svg";
import card3 from "/assets/projects/card-3.svg";
import card4 from "/assets/projects/card-4.svg";
import card5 from "/assets/projects/card-5.svg";
import card6 from "/assets/projects/card-6.svg";

import brain from "../assets/brain.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

import example from "../assets/hero/example.png";

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
    url: "#resume",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Contact me",
    url: "#about",
    onlyMobile: true,
  },
];

export const heroContent = [
  {
    id: "0",
    title: "Deploy",
    url: "https://drive-emporium.vercel.app",
    iconUrl: homeSmile,
  },
  {
    id: "1",
    title: "GitHub",
    url: "https://github.com/AlexandreDresch/DriveEmporium",
    iconUrl: file,
  },
  {
    id: "2",
    title: "GitHub Profile",
    url: "https://www.github.com/AlexandreDresch",
    iconUrl: search,
  },
  {
    id: "3",
    title: "GitHub Repositories",
    url: "https://github.com/AlexandreDresch?tab=repositories",
    iconUrl: plusSquare,
  },
];

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

export const projectsBackendAssets = [
  {
    id: 1,
    backgroundUrl: card1,
    iconUrl: icon1,
  },
  {
    id: 2,
    backgroundUrl: card2,
    iconUrl: icon2,
  },
  {
    id: 3,
    backgroundUrl: card3,
    iconUrl: icon1,
  },
  {
    id: 4,
    backgroundUrl: card4,
    iconUrl: icon2,
  },
  {
    id: 5,
    backgroundUrl: card5,
    iconUrl: icon1,
  },
  {
    id: 6,
    backgroundUrl: card6,
    iconUrl: icon2,
  },
];

export const projectsFrontend = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: example,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: example,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: example,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: example,
  },
];

const aboutText =
  "With a strong foundation in Node.js, JavaScript, TypeScript, React.js, and Next.js. I am eager to learn and passionate about developing web applications that are both functional and user-friendly.";

export const aboutContent = [
  {
    id: "0",
    title: "I am a FullStack Developer",
    text: aboutText,
    iconUrl: brain,
  },
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/alexandre-dresch/",
  },
  {
    id: "2",
    title: "GitHub",
    iconUrl: github,
    link: "https://www.github.com/AlexandreDresch",
  },
];

export const aboutApps = [
  {
    id: "0",
    title: "NextJs",
    icon: nextjs,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "JavaScript",
    icon: javascript,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "TypeScript",
    icon: typescript,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "ReactJs",
    icon: reactjs,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "NestJs",
    icon: nestjs,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "PostgreSQL",
    icon: postgresql,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "MongoDB",
    icon: mongodb,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "SpringBoot",
    icon: springboot,
    width: 38,
    height: 32,
  },
];

export const resume = [
  {
    id: "0",
    title: "Português",
    description: "Habilidades, experiências, projetos e educação",
    features: [
      "Linguagens, frameworks, bancos de dados, ferramentas e práticas",
      "Descrição de projetos, responsabilidades e realizações",
      "Onde estudei, o que estudei e em que intervalo de tempo",
    ],
    resume: "/resume/AlexandreDreschPortugues.pdf"
  },
  {
    id: "1",
    title: "English",
    description: "Skills, experiences, projects, and education",
    features: [
      "Languages, frameworks, databases, tools, and practices",
      "Project descriptions, responsibilities, and achievements",
      "Where I studied, what I studied, and over what period of time",
    ],
    resume: "/resume/AlexandreDreschEnglish.pdf"
  },
];
