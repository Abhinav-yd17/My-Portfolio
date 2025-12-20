import React from 'react';
import { motion } from 'framer-motion';

import Button from '../../components/common/Button';
import { smoothScrollTo } from '../../utils/helpers';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="inline-block mb-8"
        >
          <div className="w-4 h-4 bg-neon-blue rounded-full animate-pulse-glow" />
        </motion.div>

        {/* Headings */}
        {["Hello, I'm", 'Full Stack Developer', 'Based in Digital Space'].map(
          (text, i) => (
            <motion.h1
              key={i}
              custom={i}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className={`text-4xl md:text-7xl font-bold font-display mb-4 ${
                i === 1
                  ? 'bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent'
                  : 'text-white'
              }`}
            >
              {text}
            </motion.h1>
          )
        )}

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Crafting digital experiences with modern technologies and clean code.
          Specializing in React, Node.js, and cloud architecture.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button onClick={() => smoothScrollTo('projects')}>
            View Projects
          </Button>
          <Button
            variant="secondary"
            onClick={() => smoothScrollTo('contact')}
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-blue rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
