import { Github, LinkedinIcon, InstagramIcon, FacebookIcon } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a 
          href="https://github.com/ryomensuzan" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/ryomensuzan" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={24} />
        </a>
        <a 
          href="https://instagram.com/ryomensuzan" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon size={24} />
        </a>
        <a 
          href="https://facebook.com/ryomensuzan" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookIcon size={24} />
        </a>
      </div>
    </footer>
  );
}