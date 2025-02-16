import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div
        className={`navbar flex justify-between items-center px-6 py-3 transition-all duration-500 ${
          sticky
            ? "bg-white bg-opacity-30 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Left Section */}
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="lg:hidden text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-sm mt-3 p-2 shadow-lg bg-white bg-opacity-20 backdrop-blur-lg rounded-lg w-64 text-gray-900 font-semibold"
            >
              <li className="hover:text-blue-500"><a href="#about">About</a></li>
              <li className="hover:text-blue-500"><a href="#skills">Skills</a></li>
              <li className="hover:text-blue-500"><a href="#project">Projects</a></li>
              <li className="hover:text-blue-500"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Center Navigation (Desktop) */}
        <div className="hidden lg:flex space-x-10 text-xl font-semibold">
          <a href="#about" className="text-white hover:text-blue-400 transition duration-300">About</a>
          <a href="#skills" className="text-white hover:text-blue-400 transition duration-300">Skills</a>
          <a href="#project" className="text-white hover:text-blue-400 transition duration-300">Projects</a>
          <a href="#contact" className="text-white hover:text-blue-400 transition duration-300">Contact</a>
        </div>

        {/* Right Section - GitHub Icon */}
        <div className="navbar-end">
          <a href="https://github.com/Gaurav1801" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-white hover:text-blue-400 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}
