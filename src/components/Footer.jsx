import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFF] py-10 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 text-center text-gray-800"
      >
        {/* Name / Logo */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 text-blue-600 bg-clip-text">
          Gaurav Tiwari
        </h2>

        {/* Email */}
        <a
          href="mailto:gaurav.rt18@gmail.com"
          className="block mt-3 text-gray-700 hover:text-blue-600 hover:underline transition duration-300 text-lg"
        >
          gaurav.rt18@gmail.com
        </a>

        {/* Divider Line */}
        <div className="w-16 h-[2px] bg-blue-500 mx-auto my-5 rounded-full"></div>

        {/* Copyright */}
        <p className="flex items-center justify-center text-gray-600 text-sm">
          <FaRegCopyright className="mr-1" /> 2025 All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
}
