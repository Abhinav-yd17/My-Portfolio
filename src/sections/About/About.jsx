import React from 'react';
import { motion } from 'framer-motion';

import Card from '../../components/ui/Card';
import SectionTitle from '../../components/ui/SectionTitle';

const About = () => {
  const techStack = [
    'React.js',
    'C++',
    'Flask',
    'Node.js',
    'Python',
    'MongoDB',
    'MY SQL',
    'NLP',
    'Tailwind CSS',
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="About Me"
          subtitle="Passionate developer with expertise in modern web technologies"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card hoverEffect={false}>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>

              <p className="text-gray-300 mb-4">
                With over 2 years of experience in software development,
                I&apos;ve worked on projects ranging from startup MVPs to
                enterprise-scale applications.
              </p>

              <p className="text-gray-300 mb-6">
                My passion lies in creating efficient, scalable solutions
                that provide exceptional user experiences while maintaining
                clean, maintainable code.
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm">Available for freelance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse" />
                  <span className="text-sm">Open to opportunities</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card hoverEffect={false}>
              <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>

              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-2 p-3 rounded-lg glass-light hover:bg-white/5 transition-colors"
                  >
                    <div className="w-2 h-2 bg-neon-blue rounded-full" />
                    <span className="text-gray-300">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
           { value: '10+', label: 'Projects Built' },
           { value: '2nd Year', label: 'B.Tech CSE AI Student' },
           { value: '500+', label: 'Hours of Coding' },
           { value: '∞', label: 'Learning Mode' },

          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold font-display text-neon-blue mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
