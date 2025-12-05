import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "PROJECTS", id: "projects" },
    { name: "CONTACT", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu if open
    }
  };

  return (
    <nav className="w-full bg-slate-900 fixed top-0 left-0 z-50 shadow-md shadow-black/20">
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <span className="ml-3 text-2xl font-bold text-white">
            Nafi Mahmud Bukhari
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex ml-10 space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-gray-300 hover:text-[#FF6B5C] font-semibold text-base transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="-mr-2 flex md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-800 p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition"
          >
            {isOpen ? (
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <IoClose size={26} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <CiMenuFries size={26} />
              </motion.div>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-slate-900">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="block px-3 py-2 text-gray-300 hover:text-[#FF6B5C] font-semibold text-base"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
