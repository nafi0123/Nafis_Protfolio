import React from "react";
import { motion } from "framer-motion";
import pp from "../../../src/assets/Nafi_s_Picture_-removebg-preview.png";

const name = "Nafi Mahmud Bukhari";

const Banner = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.08, delayChildren: 0.2 } 
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const floatImage = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section id="home" className="bg-slate-900 text-white min-h-screen flex items-center justify-between px-6 md:px-20">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between mx-auto">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF6B5C] mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Full Stack Developer
          </motion.h1>

          {/* Animated Name */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl mb-6 flex flex-wrap justify-center md:justify-start"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                initial="hidden"
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  delay: index * 0.08,
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  times: [0, 0.3, 0.7, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg sm:text-xl md:text-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Motivated Frontend Developer building user-friendly, responsive, and
            visually appealing web interfaces using React.js, JavaScript, and
            modern web technologies.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 bg-[#FF6B5C] text-slate-900 font-semibold rounded-lg"
              whileHover={{ scale: 1.1, backgroundColor: "#FF5A4D" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Me
            </motion.a>

            <motion.a
              href="https://drive.google.com/uc?export=download&id=1YY-xK0bnePCNLs7KYkP4t999S6b42upt"
              className="inline-block px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg"
              whileHover={{ scale: 1.1, backgroundColor: "#4b5563" }}
              transition={{ type: "spring", stiffness: 300 }}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-4 border-[#FF6B5C] overflow-hidden shadow-lg flex items-center justify-center bg-slate-900 mt-8 md:mt-0"
          variants={floatImage}
          animate="animate"
        >
          <img
            src={pp}
            alt="Nafi Mahmud Bukhari"
            className="w-auto h-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
