import React from "react";
import { FaRegCopyright, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section id="contact" className="bg-[#0B0C10] py-12">
      {/* Footer Container */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white flex flex-col md:flex-row items-center justify-between mx-auto max-w-7xl px-6 md:px-12"
      >
        {/* Left Section - Logo & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Gaurav Tiwari
          </h2>
          <p className="flex items-center justify-center md:justify-start text-gray-400 mt-2">
            <FaRegCopyright className="mr-1" /> 2024 All Rights Reserved
          </p>
        </div>

        {/* Middle Section - Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-400 text-lg font-medium">
          <a href="#about" className="hover:text-white transition duration-300">About</a>
          <a href="#skills" className="hover:text-white transition duration-300">Skills</a>
          <a href="#project" className="hover:text-white transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-white transition duration-300">Contact</a>
        </nav>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            href="https://x.com/GauravTiwa18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
            title="Twitter"
          >
            <FaTwitter className="text-2xl" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            href="https://github.com/Gaurav1801"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition duration-300"
            title="GitHub"
          >
            <FaGithub className="text-2xl" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            href="http://linkedin.com/in/gaurav-tiwari-57435420b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
            title="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </motion.a>
        </div>
      </motion.footer>

      {/* Bottom Section - Email */}
      <div className="mt-6 text-center text-gray-400 hover:text-white transition duration-300 text-lg">
        <a href="mailto:gaurav.rt18@gmail.com" className="hover:underline">
          gaurav.rt18@gmail.com
        </a>
      </div>
    </section>
  );
}
