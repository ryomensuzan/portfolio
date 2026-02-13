import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Zap, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot"></span>
            Available for work
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="gradient-text">Web Developer</span>
            <br />
            Turning Ideas into
            <br />
            Digital Reality
          </motion.h1>
          
          <motion.p className="hero-description" variants={itemVariants}>
            Crafting exceptional digital experiences with modern web technologies.
            Specialized in React, Node.js, and the MERN stack.
          </motion.p>
          
          <motion.div className="hero-actions" variants={itemVariants}>
            <Link to="/work" className="btn btn-primary">
              View My Work
              <ArrowRight size={20} />
            </Link>
            <a 
              href="/resume_Suzan.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Download size={20} />
              Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          variants={itemVariants}
        >
          <div className="floating-card card-1">
            <Code size={32} strokeWidth={1.5} />
          </div>
          <div className="floating-card card-2">
            <Palette size={32} strokeWidth={1.5} />
          </div>
          <div className="floating-card card-3">
            <Zap size={32} strokeWidth={1.5} />
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Overview */}
      <motion.section 
        className="skills-preview"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="skill-card" variants={itemVariants}>
          <div className="skill-icon">
            <Code size={28} strokeWidth={1.5} />
          </div>
          <h3>Clean Code</h3>
          <p>Writing maintainable, scalable solutions with modern best practices</p>
        </motion.div>

        <motion.div className="skill-card" variants={itemVariants}>
          <div className="skill-icon">
            <Palette size={28} strokeWidth={1.5} />
          </div>
          <h3>Modern Design</h3>
          <p>Creating intuitive interfaces with stunning aesthetics</p>
        </motion.div>

        <motion.div className="skill-card" variants={itemVariants}>
          <div className="skill-icon">
            <Zap size={28} strokeWidth={1.5} />
          </div>
          <h3>Performance</h3>
          <p>Optimized solutions for lightning-fast experiences</p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;