import React from "react";
import list from "./../list.json";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <section
      id="project"
      className="py-20 px-6 md:px-12 lg:px-20 bg-[#F8FAFF] text-gray-900"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl text-center font-extrabold tracking-wide"
      >
        <span className="text-blue-600">Projects</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-center text-gray-700 mt-4 max-w-2xl mx-auto text-lg"
      >
        A showcase of my recent work demonstrating clean design, optimized
        performance, and practical applications using modern web technologies.
      </motion.p>

      {/* Project Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center max-w-6xl m-auto"
      >
        {list.map((data) => (
          <ProjectCard data={data} key={data.id} />
        ))}
      </motion.div>
    </section>
  );
}
