import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loader from './components/common/Loader';
import Cursor from './components/common/Cursor';

// Lazy load sections for better performance
const Hero = lazy(() => import('./sections/Hero/Hero'));
const About = lazy(() => import('./sections/About/About'));
const Skills = lazy(() => import('./sections/Skills/Skills'));
const Projects = lazy(() => import('./sections/Projects/Projects'));
const Contact = lazy(() => import('./sections/Contact/Contact'));

function App() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <ThemeProvider>
      <Suspense fallback={<Loader />}>
        <Cursor />
        <div className="bg-dark-bg min-h-screen">
          <Navbar />
          
          <motion.main
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </motion.main>
          
          <Footer />
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;