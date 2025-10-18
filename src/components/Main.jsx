import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImg from "./../assets/me.jpeg";

export default function Main() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "gaurav.pdf";
    link.download = "Gaurav_Resume";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative flex mt-10 md:mt-0 items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 bg-[#F8FAFF]"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left max-w-6xl w-full">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-4 sm:space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Hey, I'm <br />
            <span className="text-blue-600">Gaurav Tiwari</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-md mx-auto md:mx-0">
            A passionate frontend developer dedicated to creating elegant, fast,
            and user-focused web experiences using modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
            <button
              onClick={handleDownload}
              className="bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Download Resume
            </button>

            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* Right Section - Profile Image + Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0"
        >
          <div className="relative mb-6 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-70 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Social/Profile Links */}
          <div className="flex gap-6 text-xl sm:text-2xl text-blue-600">
            <a
              href="https://github.com/Gaurav1801"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="http://linkedin.com/in/gaurav-tiwari-57435420b"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/GauravTiwa18"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
