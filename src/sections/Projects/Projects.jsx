import React from 'react';
import { motion } from 'framer-motion';

import Card from '../../components/ui/Card';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/common/Button';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of my recent work that showcases my skills"
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                {/* Project Preview */}
                <div className="relative overflow-hidden rounded-xl mb-6 group">
                  <div className="aspect-video bg-gradient-to-br from-dark-card to-dark-border flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {index % 4 === 0 && ''}
                      {index % 4 === 1 && ''}
                      {index % 4 === 2 && ''}
                      {index % 4 === 3 && ''}
                    </div>
                  </div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full glass-light text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="secondary" className="w-full">
                        GitHub
                      </Button>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full">
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Abhinav-yd17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              View All Projects on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
