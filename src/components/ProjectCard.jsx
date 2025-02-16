import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import project1 from "./../assets/portfolioimg.png";
import project2 from "./../assets/textutil.png";
import project3 from "./../assets/todolist.png";
import project4 from "./../assets/stockideas.png";
import project5 from "./../assets/bookstore.png";
import project6 from "./../assets/backend.png";
import project7 from "./../assets/image/Socket.io.png"

export default function ProjectCard({ data }) {
  console.log("data", data);

  // Mapping IDs to corresponding images
  const projectImages = {
    "1": project1,
    "2": project2,
    "3": project3,
    "4": project4,
    "5": project5,
    "6": project6,
    "7":project7
  };

  return (
    <motion.div
      whileHover={{ scale: 1.07, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
      transition={{ duration: 0.4 }}
      className="relative bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 w-[320px] md:w-[360px] mx-4"
    >
      {/* Project Image with Overlay Effect */}
      <figure className="relative overflow-hidden rounded-t-3xl">
        <img
          className="object-cover w-full h-56 rounded-t-3xl transition-transform duration-500 hover:scale-105"
          src={projectImages[data?.id] || project1}
          alt={data?.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 hover:opacity-50 transition-opacity duration-500"></div>
      </figure>

      {/* Project Details */}
      <div className="p-5 text-white">
        <h2 className="text-2xl font-bold tracking-wide">{data?.name}</h2>
        <p className="text-gray-300 text-sm mt-2">{data?.discription}</p>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            {data?.techstack?.map((tech, index) => (
              <span
                key={index}
                className="bg-white/20 px-2 py-1 rounded-md text-xs text-white"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-3">
            <a
              href={data?.giturl}
              className="bg-gray-900/80 text-white p-3 rounded-lg hover:bg-gray-700/80 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={data?.url}
              className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
