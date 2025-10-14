import React from 'react';
import './About.css';

const About = () => {
  const technicalSkills = [
    'JavaScript', 'React', 'Node.js', 'TypeScript',
    'MongoDB',  'AWS', 'Docker', 'Git',
    'HTML5', 'CSS3', 'Express.js', 'Next.js'
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Critical Thinking',
    'Leadership',
    'Time Management'
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-image">
            <img 
              src="/suzan-katuwal-profile.png" alt="Profile of suzan katuwal" 
              className="profile-photo"
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Suzan Katuwal</h1>
            <p className="profile-role">Web Developer</p>
            <div className="profile-actions">
              <button className="btn btn-primary">
                <a href="/resume_Suzan.pdf" target="_blank" 
              rel="noopener noreferrer">Download Resume</a>
              </button>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="details-section">
          {/* About Me */}
          <div className="section">
            <h2 className="section-title">About Me</h2>
            <div className="section-content">
              <p className="bio">
                Passionate web developer with 1+ years of experience creating 
                innovative web applications. I specialize in modern JavaScript frameworks 
                and enjoy solving complex problems with elegant, scalable solutions.
              </p>
              <p className="motivation">
                Driven by the desire to build technology that makes a meaningful impact, 
                I constantly seek opportunities to learn new technologies and collaborate 
                with diverse teams to deliver exceptional user experiences.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="section">
            <h2 className="section-title">Soft Skills</h2>
            <div className="soft-skills-list">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <span className="soft-skill-bullet">•</span>
                  <span className="soft-skill-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;