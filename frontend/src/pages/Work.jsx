import React from 'react';
import './Work.css';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "/ecommerce.png",
      description: "A  e-commerce platform with user authentication, payment processing, and inventory management. Features include shopping cart, order tracking, and admin dashboard.",
      techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      demoLink: "",
      githubLink: "https://github.com/ryomensuzan/netbazaar.git"
    },
    {
      id: 2,
      title: "Expenses Management Platform",
      image: "/moneymap.png",
      description: "A comprehensive expenses management platform that allows users to track their income and expenses, set budgets, and generate financial reports. Features include data visualization and multi-currency support.",
      techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      demoLink: "",
      githubLink: "https://github.com/ryomensuzan/moneymap.git"
    },
    {
      id: 3,
      title: "Omega Watches Website Clone",
      image: "/Omega.png", 
      description: "An interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts. Responsive design for all devices.",
      techStack: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3", "HTML5"],
      demoLink: "",
      githubLink: "https://github.com/ryomensuzan/"
    }
  ];

  return (
    <div className="work-container">
      <div className="work-content">
        <div className="section-header">
          <h2 className="section-title">My Work</h2>
          <p className="section-subtitle">
            A collection of projects showcasing my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn btn-demo"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn btn-github"
                    >
                      GitHub
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;