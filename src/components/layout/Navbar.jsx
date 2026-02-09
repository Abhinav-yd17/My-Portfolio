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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50"
    >
      {/* 🔮 Glass Panel */}
      <div className="relative flex items-center justify-between px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.15)]">

        {/* Neon Border Glow */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent bg-gradient-to-r from-cyan-400/30 via-purple-500/20 to-pink-500/30 blur-xl opacity-40" />

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          onClick={() => smoothScrollTo("hero")}
          className="text-xl font-bold tracking-wider text-white cursor-pointer relative z-10"
        >
          Abhi<span className="text-cyan-400">folio</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 relative z-10">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => smoothScrollTo(item.id)}
              className="relative text-gray-300 hover:text-white transition-colors group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#00ffff]" />
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center gap-1 relative z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`h-0.5 w-6 bg-white transition ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 rounded-xl backdrop-blur-xl bg-black/40 border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.2)] p-6 md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    smoothScrollTo(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white text-left"
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
