// components/about.tsx

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Graduate of a comprehensive three-year advanced diploma program in{" "}
        <span className="font-medium">Computer Programming and Analysis</span>,
        acquired a solid foundation in programming and IT analysis, preparing
        for a career in the dynamic and evolving world of IT. Gained hard and
        soft skills necessary for software application development and testing
        in the first two years. The final year focused on developing advanced
        technical abilities, communication, teamwork, and client service
        skills.
      </p>

      <p className="mb-3">
        Graduate of a comprehensive three-year advanced diploma program in{" "}
        <span className="font-medium">Computer Programming and Analysis</span>,
        Ready to apply these skills in roles such as database
        administration, systems analysis and design, application design and
        development, web application design and development, data architect,
        full-stack developer, and mobile application developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and enjoying nature. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play to play squash and badmintion.
      </p>
    </motion.section>
  );
}
