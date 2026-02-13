import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Code } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const technicalSkills = [
    // List of technical skills
    //1. Web Development
    'JavaScript', 'React', 'MongoDB', 'AWS', 'Git',
    'HTML5', 'CSS3', 'MySQL', 'VS Code',

    //2. Windows and mobile application development
    'Java', 'SQLite', 'IntelliJ IDEA', 'Android Studio'
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Critical Thinking',
    'Leadership',
    'Time Management'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div 
      className="about-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Profile Section */}
      <motion.div className="profile-section" variants={itemVariants}>
        <div className="profile-card">
          <motion.div 
            className="profile-image-wrapper"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/suzan-katuwal-profile.png" 
              alt="Profile of Suzan Katuwal" 
              className="profile-photo"
            />
            <div className="profile-border"></div>
          </motion.div>
          
          <div className="profile-info">
            <h1 className="profile-name">
              Suzan Katuwal
            </h1>
            <p className="profile-role">
              <Code size={18} />
              Web Developer
            </p>
            
            <div className="profile-meta">
              <span className="meta-item">
                <MapPin size={16} />
                Nepal
              </span>
              <span className="meta-item">
                <Calendar size={16} />
                1+ Years Experience
              </span>
            </div>

            <a 
              href="/resume_Suzan.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>

      {/* About Content */}
      <div className="about-content">
        {/* About Me */}
        <motion.section className="section" variants={itemVariants}>
          <h2 className="section-title">
            <span className="title-number">01</span>
            About Me
          </h2>
          <div className="section-content">
            <p className="bio">
              Passionate web developer with 1+ years of experience creating 
              innovative web applications. I specialize in modern JavaScript frameworks 
              and enjoy solving complex problems with elegant, scalable solutions.
            </p>
            <p className="bio">
              Driven by the desire to build technology that makes a meaningful impact, 
              I constantly seek opportunities to learn new technologies and collaborate 
              with diverse teams to deliver exceptional user experiences.
            </p>
          </div>
        </motion.section>

        {/* Technical Skills */}
        <motion.section className="section" variants={itemVariants}>
          <h2 className="section-title">
            <span className="title-number">02</span>
            Technical Skills
          </h2>
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
          >
            {technicalSkills.map((skill, index) => (
              <motion.span 
                key={index} 
                className="skill-badge"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* Soft Skills */}
        <motion.section className="section" variants={itemVariants}>
          <h2 className="section-title">
            <span className="title-number">03</span>
            Soft Skills
          </h2>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="soft-skill-item"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="soft-skill-bullet"></span>
                <span className="soft-skill-text">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;