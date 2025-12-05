import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cpu, GitBranch, Trophy } from "lucide-react";

const About = () => {
  const bulletContainer = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const bulletItem = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.03, transition: { type: "spring", stiffness: 300 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const skillBlock = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  };

  const skills = [
    {
      title: "Programming Challenges Solved",
      value: "500+",
      icon: <Code size={28} className="text-[#FF6B5C]" />,
    },
    {
      title: "ICPC 2024",
      value: "Dhaka Regional",
      icon: <Trophy size={28} className="text-[#FF6B5C]" />,
    },
    {
      title: "DSA Proficiency",
      value: "Data Structures & Algorithms",
      icon: <Cpu size={28} className="text-[#FF6B5C]" />,
    },
    {
      title: "Frontend",
      value: "React.js, JavaScript",
      icon: <Code size={28} className="text-[#FF6B5C]" />,
    },
    {
      title: "Backend",
      value: "Node.js, Express.js",
      icon: <Database size={28} className="text-[#FF6B5C]" />,
    },
    {
      title: "Tools",
      value: "Git & GitHub",
      icon: <GitBranch size={28} className="text-[#FF6B5C]" />,
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20 px-6 md:px-20 space-y-24 scroll-mt-20"
    >
      {/* HEADER */}
      <motion.h1
        className="text-5xl font-bold mb-16 text-center md:text-left text-[#FF6B5C]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row gap-16 w-full justify-between">
        {/* LEFT */}
        <motion.div
          className="md:w-1/2 space-y-14 relative"
          variants={bulletContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Neon Vertical Line */}
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-[#FF6B5C] shadow-[0_0_12px_#FF6B5C]"></div>

          {/* Career */}
          <motion.div
            className="flex items-start gap-6 relative pl-10 group"
            variants={bulletItem}
            whileHover="hover"
          >
            <span className="w-3 h-3 rounded-full bg-[#FF6B5C] shadow-[0_0_10px_#FF6B5C] absolute left-[-6px]"></span>
            <div>
              <h3 className="text-xl font-semibold text-[#FF6B5C] group-hover:text-yellow-400 transition">
                Career Objectives
              </h3>
              <p className="text-gray-300">
                Motivated Frontend Developer seeking an opportunity to apply my
                skills in building user-friendly, responsive, and visually appealing web interfaces.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="flex items-start gap-6 relative pl-10 group"
            variants={bulletItem}
            whileHover="hover"
          >
            <span className="w-3 h-3 rounded-full bg-[#FF6B5C] shadow-[0_0_10px_#FF6B5C] absolute left-[-6px]"></span>
            <div>
              <h3 className="text-xl font-semibold text-[#FF6B5C] group-hover:text-yellow-400 transition">
                Contact
              </h3>
              <p className="text-gray-300">
                Phone: +8801644862431 <br />
                Email: nafi.cse0123@gmail.com <br />
                Location: Barishal, Bangladesh
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className="flex items-start gap-6 relative pl-10 group"
            variants={bulletItem}
            whileHover="hover"
          >
            <span className="w-3 h-3 rounded-full bg-[#FF6B5C] shadow-[0_0_10px_#FF6B5C] absolute left-[-6px]"></span>
            <div>
              <h3 className="text-xl font-semibold text-[#FF6B5C] group-hover:text-yellow-400 transition">
                Education
              </h3>
              <p className="text-gray-300">
                B.Sc in Computer Science and Engineering, 7th Semester – Barishal Information Technology College
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="md:w-1/2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Skills & Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 p-4 bg-slate-800/60 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                variants={skillBlock}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
              >
                <div>{skill.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{skill.value}</h3>
                  <p className="text-gray-400 text-sm">{skill.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
