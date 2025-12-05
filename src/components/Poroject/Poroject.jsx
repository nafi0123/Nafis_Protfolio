import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFiltered(data);
      });
  }, []);

  // Fix spelling issues
  const normalize = (str) =>
    str
      ?.toLowerCase()
      .replace("fronted", "frontend")
      .replace("back-end", "backend")
      .replace("fullstack", "full stack")
      .trim();

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "All") {
      setFiltered(projects);
    } else {
      setFiltered(
        projects.filter((p) => normalize(p.type) === normalize(category))
      );
    }
  };

  return (
    <section className="bg-slate-900 text-white py-20 px-6 md:px-20">
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold text-[#FF6B5C] mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="mt-6 flex gap-4 mb-14 flex-wrap">
        {["All", "Frontend", "Backend", "Full Stack"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-5 py-2 rounded-lg font-semibold border duration-200
              ${
                activeFilter === cat
                  ? "bg-[#FF6B5C] text-slate-900 border-[#FF6B5C] shadow-xl"
                  : "border-gray-600 text-white hover:border-[#FF6B5C]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden
                         border border-gray-800 hover:border-[#FF6B5C]
                         duration-300 shadow-xl backdrop-blur-md bg-white/10"
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-44 md:h-52 object-cover group-hover:scale-110 duration-500"
                />

                {/* Title Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    className="text-white text-xl font-bold 
                               bg-black/50 px-4 py-1 rounded-lg
                               border border-[#FF6B5C]
                               opacity-90 group-hover:opacity-100
                               transition duration-300 drop-shadow-lg"
                  >
                    {proj.title}
                  </h3>
                </div>
              </div>

              {/* Type Badge */}
              <span
                className="absolute top-3 left-3 bg-[#FF6B5C] text-slate-900 px-3 py-1 
                           text-xs rounded-full font-semibold shadow-lg"
              >
                {proj.type}
              </span>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black/70 opacity-0 
                           group-hover:opacity-100 duration-300 
                           flex justify-center items-center"
              >
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="px-5 py-2 bg-[#FF6B5C] text-slate-900 font-bold rounded-lg shadow-lg
                             hover:scale-105 duration-300"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 text-xl py-20">
          No projects found in this category.
        </div>
      )}

      {/* ====================== MODAL ====================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="bg-slate-800 w-full max-w-2xl rounded-xl p-6 relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white text-3xl hover:text-[#FF6B5C]"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold text-[#FF6B5C] mb-5">
                {selectedProject.title}
              </h2>

              <img
                src={selectedProject.image}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />

              <p className="text-gray-300 mb-4 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {selectedProject.tags?.map((t, i) => (
                  <span
                    key={i}
                    className="bg-[#FF6B5C] text-slate-900 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                {selectedProject.live_url && (
                  <a
                    href={selectedProject.live_url}
                    target="_blank"
                    className="px-4 py-2 bg-[#FF6B5C] text-slate-900 rounded-md font-semibold shadow-md hover:scale-105 duration-200"
                  >
                    Live Site
                  </a>
                )}

                {selectedProject.client_repo && (
                  <a
                    href={selectedProject.client_repo}
                    target="_blank"
                    className="px-4 py-2 bg-gray-700 rounded-md font-semibold hover:bg-gray-600 duration-200"
                  >
                    Client Repo
                  </a>
                )}

                {selectedProject.server_repo && (
                  <a
                    href={selectedProject.server_repo}
                    target="_blank"
                    className="px-4 py-2 bg-gray-700 rounded-md font-semibold hover:bg-gray-600 duration-200"
                  >
                    Server Repo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
