import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Code, Palette, Zap, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="highlight"
          >
            Web Developer
          </motion.span>
          <br />
          Turning Ideas into
          <br />
          Digital Reality
        </h1>
        
        <motion.div 
          className="cta-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="/work" className="cta-button">
            View My Work
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </motion.section>

      {/* Skills Overview */}
      <motion.section 
        className="skills-overview"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <div className="skill-card">
          <Code size={24} />
          <h3>Development</h3>
          <p>Clean, efficient code that brings ideas to life</p>
        </div>

        <div className="skill-card">
          <Palette size={24} />
          <h3>Design</h3>
          <p>Intuitive interfaces with modern aesthetics</p>
        </div>

        <div className="skill-card">
          <Zap size={24} />
          <h3>Performance</h3>
          <p>Fast, responsive, and optimized solutions</p>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;