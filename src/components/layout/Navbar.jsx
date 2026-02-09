import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useTheme } from "../../context/ThemeContext";
import { smoothScrollTo } from "../../utils/helpers";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => smoothScrollTo("hero")}
          className="text-xl font-bold tracking-wide text-white cursor-pointer"
        >
          Abhi<span className="text-indigo-400">folio</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => smoothScrollTo(item.id)}
              className="px-2 py-1 text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`h-0.5 w-6 bg-white transition ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/60 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    smoothScrollTo(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="py-2 text-left text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="py-2 text-left text-gray-300 hover:text-white"
              >
                Switch to {isDark ? "Light" : "Dark"} Mode
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
