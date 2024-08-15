import { BotMessageSquare } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { GlobeLock } from "lucide-react";

import abid from "../assets/profile-pictures/dev1.jpg";
import partho from "../assets/profile-pictures/dev2.jpg";
import najib from "../assets/profile-pictures/dev3.jpeg";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Analyzer", href: "/analyzer" },
  { label: "Classifier", href: "/classifier" },
  { label: "Open Assist", href: "/assist" },
  { label: "About", href: "/about" },
];

export const teams = [
  {
    user: "Md. Abid Hasan Rafi",
    title: "ML Application Developer",
    image: abid,
    github: "https://github.com/AbidHasanRafi/",
    linkedin: "https://www.linkedin.com/in/abid-hasan-rafi/",
    text: "Working on MediTech.ai has been a transformative experience. The platform's AI capabilities are exceptional, and the team's dedication to innovation is unparalleled.",
  },
  {
    user: "Pijush Kanti Roy Partho",
    title: "ML Model Architect",
    image: partho,
    github: "https://github.com/InquietoPartho/",
    linkedin: "https://www.linkedin.com/in/urslovelypartho/",
    text: "The development of MediTech.ai has been a remarkable journey. The team's expertise in machine learning and healthcare has been crucial in creating a groundbreaking AI assistant.",
  },
  {
    user: "Md. Najib-Ul-Azam Mahi",
    title: "ML Tech Analyst",
    image: najib,
    github: "https://github.com/itsnajibul/",
    linkedin: "https://bd.linkedin.com/in/itsnajibul/",
    text: "The MediTech.ai project has been an extraordinary journey. By harnessing the team's deep expertise in machine learning and healthcare, they have successfully created a pioneering AI assistant that is set to revolutionize the medical field.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "AI-Optimized Medical Assistant",
    description:
      "Effortlessly get your medical assistance environments with a user-friendly interface offered by MediTech, enhanced by AI.",
  },
  {
    icon: <ShieldHalf />,
    text: "AI Medical Image Classifier",
    description:
      "Jumpstart on our services with a variety of built-in classifiers specifically designed for different medical applications and scenarios.",
  },
  {
    icon: <GlobeLock />,
    text: "Smart AI Medical Analyzer",
    description:
      "Gain valuable insights within our medical assistant applications with an integrated analytics systems powered by advanced AI algorithms.",
  },
];
