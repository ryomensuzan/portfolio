import { Github, Linkedin, Instagram, Facebook, Heart } from 'lucide-react';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a 
            href="https://github.com/ryomensuzan" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <Github size={22} />
          </a>
          <a 
            href="https://linkedin.com/in/ryomensuzan" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <Linkedin size={22} />
          </a>
          <a 
            href="https://instagram.com/ryomensuzan" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-link"
          >
            <Instagram size={22} />
          </a>
          <a 
            href="https://facebook.com/ryomensuzan" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-link"
          >
            <Facebook size={22} />
          </a>
        </div>
        
        <div className="footer-text">
          <p>
            Made with <Heart size={14} className="heart-icon" /> by Suzan Katuwal
          </p>
          <p className="copyright">© {currentYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}