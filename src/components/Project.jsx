import React from "react";
import list from "./../list.json";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Project() {
  console.log("list", list);

  return (
    <section id="project" className="py-16 px-6 md:px-12 lg:px-20">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl text-center font-extrabold text-white tracking-wide"
      >
        <span className="bg-gradient-to-r from-yellow-300 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          My Projects
        </span>
      </motion.h1>

      {/* Project Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
      >
        {list.map((data) => (
          <ProjectCard data={data} key={data.id} />
        ))}
      </motion.div>
    </section>
  );
}
