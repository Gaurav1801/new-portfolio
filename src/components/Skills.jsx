import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

// Import images
import htmlIcon from "./../assets/image/html.png";
import cssIcon from "./../assets/image/css.png";
import jsIcon from "./../assets/image/javascript.png";
import nodeIcon from "./../assets/image/node.png";
import expressIcon from "./../assets/image/express.png";
import mongodbIcon from "./../assets/image/mongodb.png";
import tailwindIcon from "./../assets/image/tailwind.png";
import reactIcon from "./../assets/image/React.png";
import nextjsIcon from "./../assets/image/Next.js.png";
import firebaseIcon from "./../assets/image/Firebase.png";
import socketioIcon from "./../assets/image/Socket.io.png";

export default function Skills() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    arrows: false,
    slidesToScroll: 1,
    easing: "linear",
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const skills = [
    { name: "HTML", src: htmlIcon },
    { name: "CSS", src: cssIcon },
    { name: "JavaScript", src: jsIcon },
    { name: "Node.js", src: nodeIcon },
    { name: "Express.js", src: expressIcon },
    { name: "MongoDB", src: mongodbIcon },
    { name: "Tailwind CSS", src: tailwindIcon },
    { name: "ReactJS", src: reactIcon },
    { name: "Next.js", src: nextjsIcon },
    { name: "Firebase", src: firebaseIcon },
    { name: "Socket.io", src: socketioIcon },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#F8FAFF]">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl text-center font-extrabold text-gray-900 tracking-wide"
      >
        <span className="text-blue-600">Technical Skills</span>
      </motion.h1>

      {/* Slider */}
      <div className="pt-12 max-w-6xl mx-auto">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="bg-white border border-blue-100 shadow-md rounded-2xl p-6 flex flex-col items-center justify-center transition-transform duration-300">
                <img
                  className="h-24 w-auto object-contain mb-3"
                  src={skill.src}
                  alt={skill.name}
                />
                <p className="text-gray-800 text-center text-lg font-semibold">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
