import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "George Brown College",
    location: "Toronto, Canada",
    description:
      "Successfully comepleted a 3 year(6 semsters) advanced diploma program in Computer Programming and Analysis.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Pinnacle Caterers",
    location: "Toronto, Canada",
    description:
    "I served as a Maître'd at ScotiaBank Arena (formerly known as ACC) with Pinnacle Caterers, managing MLSE's executive suites.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Toronto, Canada",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
   "MongoDB",
  "Python",
  "Django",
  "C#",
  "ASP.NET",
  "Java",
  "Springboot",
  "Mirco-services",
  "Vercel",
  "Github Actions",
  "Github",
  "Git",
  "Docker",
  "AWS",
  "Linux",
  
] as const;
