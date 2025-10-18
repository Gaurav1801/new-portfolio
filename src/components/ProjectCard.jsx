import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import project1 from "./../assets/portfolioimg.png";
import project2 from "./../assets/textutil.png";
import project3 from "./../assets/todolist.png";
import project4 from "./../assets/stockideas.png";
import project5 from "./../assets/bookstore.png";
import project6 from "./../assets/backend.png";
import project7 from "./../assets/image/Socket.io.png";
// Placeholder imports for the new projects - Using project1 as a temporary placeholder image
import project8 from "./../assets/geminai.png";
import project9 from "./../assets/geminai.png";

const projectImages = {
  "1": project1,
  "2": project2,
  "3": project3,
  "4": project4,
  "5": project5,
  "6": project6,
  "7": project7,
  // New Project Entries
  "8": project8,
  "9": project9,
};

export default function ProjectCard({ data }) {
  return (
    <motion.div
      // Subtle card lift
      whileHover={{ scale: 1.02, boxShadow: "0 8px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.3 }}
      className="relative bg-white shadow-lg overflow-hidden w-[320px] md:w-[360px] border border-gray-200 cursor-pointer transition-all duration-300"
    >
      {/* Project Image */}
      <figure className="relative overflow-hidden">
        <img
          src={projectImages[data?.id] || "./genimai.png"}
          alt={data?.name || "Project Image"}
          className="object-cover w-full h-56 transition-transform duration-500 hover:scale-105"
        />
        {/* Subtle dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 hover:bg-black/20"></div>
      </figure>

      {/* Project Details */}
      <div className="p-5 text-gray-900 flex flex-col justify-between h-auto"> {/* Added flex column for content structure */}
        <div>
            <h2 className="text-xl font-semibold tracking-wide border-b pb-2 mb-2 text-gray-900">{data?.name}</h2> {/* Added a separator */}
            {/* Added line-clamp-3 for consistent height and better readability for longer professional descriptions */}
            <p className="text-gray-600 text-sm mt-2 leading-snug line-clamp-3">
              {data?.discription}
            </p>
        </div>

        {/* Tech Stack */}
        {data?.techstack?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-100"> {/* Added top border for separation */}
            {data.techstack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 border border-gray-300 px-2 py-1 rounded text-xs text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                {tech}
              	{/* The image is being used as a temporary stand-in:  */}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-start space-x-3 mt-5 pt-3"> {/* Moved to justify-start (left-aligned) for better reading flow */}
          {data?.giturl && (
            <motion.a
              whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0,0,0,0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
              href={data.giturl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-gray-700 transition-colors duration-300" // Removed rounded-full
              aria-label="GitHub Link"
            >
              <FaGithub size={18} />
            </motion.a>
          )}
          {data?.url && (
            <motion.a
              whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0,0,0,0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-blue-700 transition-colors duration-300" // Removed rounded-full
              aria-label="Live Project Link"
            >
              <FaExternalLinkAlt size={18} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}