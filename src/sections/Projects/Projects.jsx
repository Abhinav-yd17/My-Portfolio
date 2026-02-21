import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import Card from "../../components/ui/Card";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/common/Button";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      
      {/* Animated Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of my recent work that showcases my skills"
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                rotateY: 6,
                rotateX: 4,
                scale: 1.04,
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group perspective-[1200px]"
            >
              {/* Gradient Border Wrapper */}
              <div className="relative">
                <div className="absolute -inset-[2px] rounded-2xl 
                  bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 
                  blur opacity-60 group-hover:opacity-100 transition duration-500" />

                <Card className="relative rounded-2xl backdrop-blur-xl bg-dark-card/80 border border-white/10">
                  
                  {/* Project Title */}
                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full 
                          bg-gradient-to-r from-purple-500/20 to-cyan-500/20 
                          border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="secondary"
                          className="w-full flex items-center justify-center gap-2"
                        >
                          <FiGithub />
                          GitHub
                        </Button>
                      </motion.a>
                    )}

                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full flex items-center justify-center gap-2">
                          <FiExternalLink />
                          Live Demo
                        </Button>
                      </motion.a>
                    )}
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Abhinav-yd17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="px-8 py-4 text-lg"
            >
              🚀 View All Projects on GitHub
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
