import React from 'react';
import { motion } from 'framer-motion';

import Card from '../../components/ui/Card';
import SectionTitle from '../../components/ui/SectionTitle';
import { skills } from '../../data/skills';

const Skills = () => {
  const categories = ['frontend', 'backend', 'database', 'DSA', 'tools'];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies I work with to bring ideas to life"
          align="center"
        />

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-xl font-semibold">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-neon-blue font-bold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-dark-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  />
                </div>

                <div className="mt-2 flex justify-between text-sm text-gray-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>

                <div className="mt-3">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-neon-blue/10 text-neon-blue">
                    {skill.category}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-xl glass hover:border-neon-blue/30 border border-transparent transition-all"
            >
              <div className="text-3xl mb-2">
               {category === 'frontend' && '⚡'}
               {category === 'backend' && '🖥️'}
               {category === 'database' && '🗄️'}
               {category === 'DSA' && '🧠'} 
               {category === 'tools' && '🔧'} 
              </div>
              <div className="capitalize font-medium">
                {category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;  