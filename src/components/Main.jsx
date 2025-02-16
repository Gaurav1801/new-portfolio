import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profileImg from "./../assets/me.jpeg";


export default function Main() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "gaurav.pdf";
    link.download = "Gaurav.Resume";
    link.click();
  };

  return (
    <div className="relative flex items-center justify-center h-screen px-6 md:px-12 lg:px-24">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left max-w-6xl w-full">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Hey, I'm <br />
            <TypeAnimation
              sequence={["Gaurav ", 3000, "Frontend Developer", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              className="bg-gradient-to-r from-yellow-300 via-pink-500 to-blue-500 bg-clip-text text-transparent"
              repeat={Infinity}
            />
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            A passionate frontend developer crafting stunning and interactive web experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <button
              onClick={handleDownload}
              className="bg-gray-800 text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Download Resume
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              <a href="#contact">Hire Me</a>
            </button>
          </div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
          <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gray-200 rounded-full shadow-xl border-4 border-gray-300 flex items-center justify-center overflow-hidden">
            <img src={profileImg} alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
