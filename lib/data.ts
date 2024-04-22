import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import springbootImg from "@/public/spring-boot.jpg";
import mealMateImg from "@/public/mealmate.jpg";
import swiftschedulerImg from "@/public/swift-scheduler.jpg";

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
    date: "2017 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Toronto, Canada",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2018 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Swift Scheduler",
    description:
      "A  class schedule web app devloped with MERN Stack, built to help teachers post classes and allowed registered students with profiles and tokens to join rated classes.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB",  "Github", "Cloud hosting", "CORS", "JWT"],
    imageUrl: swiftschedulerImg,
  },
  {
    title: "Java Mircoservices",
    description:
    "Built with java springboot backends each with individual databases (NoSQL/SQL),parent project with each service & db running docker images on AWS.",
    tags: ["Mongodb", "Postgres", "Java", "Docker", "Keycloak", "AWS"],
    imageUrl: springbootImg,
  },
  {
    title: "Meal Mate Mobile App",
    description:
      "Cross-platform built with ReactNative, allowing user to search and review local restaurants and order food online, based on google API's and google reviews.",
    tags: ["Mobile APP", "React Native", "One Code base","cross-platform", "iOS", "Android", "Web",],
    imageUrl: mealMateImg,
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
  "Mirco-services",
  "C#",
  "ASP.NET",
  "Java",
  "Springboot",
  "Vercel",
  "Github",
  "Git",
  "Docker",
  "iOS",
  "Android",
  "React Native",
  "Flutter",
  "Machine Learning",
  "Data Analytics",
] as const;
