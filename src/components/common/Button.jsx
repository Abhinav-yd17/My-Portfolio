import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all duration-300 transform hover:scale-105 active:scale-95';

  const variants = {
    primary:
      'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg hover:shadow-neon-blue/50',
    secondary:
      'glass text-white border border-dark-border hover:border-neon-blue',
    outline:
      'border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/10',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
