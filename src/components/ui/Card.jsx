import React from "react";
import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        transformStyle: "preserve-3d",   // 🔥 Important
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
