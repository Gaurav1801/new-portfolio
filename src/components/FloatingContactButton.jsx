import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function FloatingContactButton() {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
    >
      <FaEnvelope className="text-lg" />
    </a>
  );
}
