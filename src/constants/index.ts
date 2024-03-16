import homeSmile from "../assets/home-smile.svg";
import search from "../assets/search.svg";
import plusSquare from "../assets/plus-square.svg";
import file from "../assets/file.svg";

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
