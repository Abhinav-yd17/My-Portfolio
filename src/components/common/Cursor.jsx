import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState("default");

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });

    const hover = () => setVariant("hover");
    const leave = () => setVariant("default");

    document.querySelectorAll("button, a, .cursor-hover").forEach((el) => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", leave);
    });

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const variants = {
    default: { scale: 1 },
    hover: { scale: 1.4 },
  };

  return (
    <>
      {/* Core */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-black z-50 pointer-events-none"
        animate={{ x: pos.x - 6, y: pos.y - 6 }}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        style={{ boxShadow: "0 0 6px rgba(0,0,0,0.8)" }}
      />

      {/* Energy Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border z-50 pointer-events-none"
        variants={variants}
        animate={variant}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        style={{
          x: pos.x - 20,
          y: pos.y - 20,
          borderColor: "rgba(0,255,255,0.4)",
          boxShadow: "0 0 12px rgba(0,255,255,0.5)",
        }}
      />

      {/* Soft Glow */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 rounded-full z-40 pointer-events-none"
        animate={{ x: pos.x - 40, y: pos.y - 40 }}
        transition={{ type: "spring", stiffness: 60, damping: 10 }}
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,255,0.12), transparent 60%)",
          filter: "blur(14px)",
        }}
      />
    </>
  );
};

export default Cursor;
