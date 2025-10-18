import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        sticky ? "shadow-md bg-white/90 backdrop-blur-sm" : "bg-white"
      }`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="#">Gaurav.</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10 text-gray-700 font-medium">
          <li>
            <a
              href="#about"
              className="hover:text-blue-600 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-blue-600 transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="hover:text-blue-600 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-600 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* GitHub Icon */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Gaurav1801"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            <FaGithub className="text-3xl" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-700">
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-blue-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="hover:text-blue-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
