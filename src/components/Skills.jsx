import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

// Import images properly
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
  var settings = {
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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Define skills with properly imported images
  const skills = [
    { name: "HTML", src: htmlIcon },
    { name: "CSS", src: cssIcon },
    { name: "JavaScript", src: jsIcon },
    { name: "Node.js", src: nodeIcon },
    { name: "Express.js", src: expressIcon },
    { name: "MongoDB", src: mongodbIcon },
    { name: "Tailwind CSS", src:  tailwindIcon},
    { name: "ReactJS", src:  reactIcon },
    { name: "Next.js", src: nextjsIcon},
    { name: "Firebase", src:  firebaseIcon},
    { name: "Socket.io", src: socketioIcon},
  ];

  return (
    <section id="skills" className="py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl text-center font-extrabold text-white tracking-wide"
      >
        <span className="bg-gradient-to-r from-yellow-300 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          My Skills
        </span>
      </motion.h1>

      <div className=" pt-10 mx-10">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <img
                className="h-[220px] w-auto object-contain drop-shadow-xl"
                src={skill.src}
                alt={skill.name}
              />
              <p className="text-white text-center text-lg font-semibold mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
