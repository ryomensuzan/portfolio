import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/Work.css';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "/ecommerce.png",
      description: "A full-featured e-commerce platform with user authentication, payment processing, and inventory management. Features include shopping cart, order tracking, and admin dashboard.",
      techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      demoLink: "",
      githubLink: "https://github.com/ryomensuzan/netbazaar.git",
      featured: true
    },
    {
      id: 2,
      title: "Expenses Management Platform",
      image: "/moneymap.png",
      description: "A comprehensive expenses management platform that allows users to track their income and expenses, set budgets, and generate financial reports. Features include data visualization and multi-currency support.",
      techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      demoLink: "",
      githubLink: "https://github.com/ryomensuzan/moneymap.git",
      featured: true
    },
    {
      id: 3,
      title: "Omega Watches Website Clone",
      image: "/Omega.png", 
      description: "A pixel-perfect clone of the Omega Watches website showcasing advanced CSS techniques, responsive design, and interactive elements. Demonstrates attention to detail and modern web design practices.",
      techStack: ["JavaScript", "HTML5", "CSS3"],
      demoLink: "",
      githubLink: "https://github.com/ryomensuzan/",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    <motion.div 
      className="work-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="work-header" variants={itemVariants}>
        <h1 className="page-title">
          <span className="gradient-text">Featured Work</span>
        </h1>
        <p className="page-subtitle">
          A collection of projects showcasing my technical skills and creative problem-solving abilities
        </p>
      </motion.div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            className={`project-card ${project.featured ? 'featured' : ''}`}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {project.featured && (
              <div className="featured-badge">
                <span>Featured</span>
              </div>
            )}
            
            <div className="project-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-img"
              />
              <div className="project-overlay">
                <div className="project-links">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;