import React from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => ({
  initial: { opacity: 0, y: direction === "up" ? 30 : -30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

export default function About() {
  return (
    <section id="about" className="w-full py-16 px-6">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl text-center font-extrabold text-white tracking-wide"
      >
        <span className="bg-gradient-to-r from-yellow-300 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          About Me
        </span>
      </motion.h1>

      <div className="mt-14 flex flex-col lg:flex-row justify-center gap-10 max-w-6xl mx-auto pb-10">
        {/* Left Side - About Me */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="initial"
          animate="animate"
          className="bg-white bg-opacity-20 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 p-6 w-full lg:w-1/2"
        >
          <h2 className="text-2xl font-bold text-white mb-4">👨‍💻 About Me</h2>
          <p className="text-white text-opacity-90 leading-relaxed">
            Hey there! I'm <span className="text-yellow-300 font-semibold">Gaurav Tiwari</span>, a **Software Engineer** at  
            <span className="text-pink-300 font-semibold"> Sapient Codelabs</span>. I specialize in **MERN stack development**, creating **dynamic, scalable applications** that enhance user experience.
            <br /><br />
            I have expertise in **real-time technologies**, including **Socket.io** for **instant messaging**, and I leverage **Firebase** for **real-time notifications** to ensure users never miss an update.
            <br /><br />
            My **goal?** To build intuitive, high-performance web applications that users love to interact with! 🚀  
          </p>
        </motion.div>

        {/* Right Side - Experience & Education */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-6 w-full lg:w-1/2"
        >
          {/* Experience Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">💼 Experience</h2>
            <ul className="space-y-3 text-white text-opacity-90">
              <li className="font-semibold flex items-center gap-2">
                Sapient Codelabs - Software Engineer (2024-Present)
                <a href="https://www.sapientcodelabs.com/" target="_blank" rel="noopener noreferrer">
                  <LiaExternalLinkAltSolid className="text-cyan-300 hover:text-cyan-500 transition duration-200" />
                </a>
              </li>
              <span className="text-gray-300">
                **Full-stack development** using **React, Node.js, Express, MongoDB**.  
                Built **real-time applications** and **notification systems**.
              </span>

              <li className="font-semibold flex items-center gap-2">
                Wappzo Infotech Pvt. Ltd. - Frontend Intern (5 months)
                <a href="https://www.wappzo.com/" target="_blank" rel="noopener noreferrer">
                  <LiaExternalLinkAltSolid className="text-cyan-300 hover:text-cyan-500 transition duration-200" />
                </a>
              </li>
              <span className="text-gray-300">
                Developed **React & Next.js** web applications, enhancing UI/UX.
              </span>
            </ul>
          </div>

          {/* Education Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">🎓 Education</h2>
            <ul className="space-y-3 text-white text-opacity-90">
              <li className="font-semibold">Gujarat Technological University (2020-2024)</li>
              <span className="text-gray-300">B.E (CSE) - CGPA: 8.00</span>

              <li className="font-semibold">Bhaktaashram Ashramshala Eng. Med. School</li>
              <span className="text-gray-300">HSC (70%) | SSC (83%)</span>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
