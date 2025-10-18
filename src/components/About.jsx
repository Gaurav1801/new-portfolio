import React from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => ({
  initial: { opacity: 0, y: direction === "up" ? 30 : -30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 bg-[#F8FAFF]"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl text-center font-extrabold text-gray-900 tracking-wide"
      >
        <span className="text-blue-600">About </span>
      </motion.h1>

      <div className="mt-14 flex flex-col lg:flex-row justify-center gap-10 max-w-6xl mx-auto pb-10">
        {/* Left Side - About Me */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="initial"
          animate="animate"
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 p-8 border border-blue-100 w-full lg:w-1/2"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            I am <span className="font-semibold text-blue-700">Gaurav Tiwari</span>, a Software Engineer at{" "}
            <a
              href="https://www.sapientcodelabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sapient Codelabs
            </a>
            . I specialize in <strong>MERN stack development</strong>, creating dynamic, scalable, and user-centric web applications.
            <br /><br />
            I have experience working with <strong>real-time technologies</strong> such as <span className="text-blue-600 font-semibold">Socket.io</span> and <span className="text-blue-600 font-semibold">Firebase</span> to build instant messaging and notification systems.
            <br /><br />
            My goal is to craft intuitive, high-performance web applications that deliver seamless user experiences.
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
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Experience</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="font-semibold flex items-center gap-2">
                Sapient Codelabs — Software Engineer (2024–Present)
                <a
                  href="https://www.sapientcodelabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LiaExternalLinkAltSolid className="text-blue-500 hover:text-blue-700 transition duration-200" />
                </a>
              </li>
              <p className="text-gray-600 text-sm">
                Full-stack development using React, Node.js, Express, and MongoDB. Built real-time applications and notification systems.
              </p>

              <li className="font-semibold flex items-center gap-2">
                Wappzo Infotech Pvt. Ltd. — Frontend Intern (5 months)
                <a
                  href="https://www.wappzo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LiaExternalLinkAltSolid className="text-blue-500 hover:text-blue-700 transition duration-200" />
                </a>
              </li>
              <p className="text-gray-600 text-sm">
                Developed responsive React and Next.js web applications with enhanced UI/UX and performance optimization.
              </p>
            </ul>
          </div>

          {/* Education Card */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Education</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="font-semibold">
                Gujarat Technological University (2020–2024)
              </li>
              <p className="text-gray-600 text-sm">
                B.E in Computer Science Engineering — CGPA: 8.00
              </p>

              <li className="font-semibold">
                Bhaktaashram Ashramshala English Medium School
              </li>
              <p className="text-gray-600 text-sm">HSC: 70% | SSC: 83%</p>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
