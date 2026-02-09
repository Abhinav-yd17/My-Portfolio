import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { smoothScrollTo } from "../../utils/helpers";
import logo from "../../assets/images/icons/logo.png"; // ✅ Correct path

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
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* 🌌 Glass Background */}
      <div className="relative w-full backdrop-blur-xl bg-black/20 border-b border-cyan-400/20 shadow-[0_0_40px_rgba(0,255,255,0.15)]">

        {/* ✨ Neon Animated Top Line */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">

          {/* 🔥 LOGO */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            onClick={() => smoothScrollTo("hero")}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            <img
              src={logo}
              alt="AF Logo"
              className="w-10 h-10 rounded-full object-cover shadow-[0_0_18px_rgba(124,58,237,0.8)]"
            />

            <div className="leading-tight">
              <div className="text-white font-semibold tracking-wide text-sm">
                Abhi Folio
              </div>
              <div className="text-xs text-cyan-400 tracking-wider">
                
              </div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => smoothScrollTo(item.id)}
                className="relative text-gray-300 hover:text-white text-sm tracking-wide transition-colors group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#00ffff]" />
              </motion.button>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`h-0.5 w-6 bg-white transition ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden backdrop-blur-xl bg-black/30 border-b border-cyan-400/20 shadow-[0_0_30px_rgba(0,255,255,0.2)]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    smoothScrollTo(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-white text-left"
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
