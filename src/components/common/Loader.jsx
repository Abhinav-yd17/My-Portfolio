import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-dark-bg z-50">
      <div className="relative">
        <motion.div
          className="w-20 h-20 border-4 border-transparent border-t-neon-blue border-r-neon-purple rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-neon-pink border-l-neon-blue rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default Loader;