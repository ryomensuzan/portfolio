import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked (mobile)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">Suzan Katuwal</Link>
      </div>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/about" onClick={handleLinkClick}>
          About
        </Link>
        <Link to="/work" onClick={handleLinkClick}>
          Work
        </Link>
      </nav>
    </header>
  );
}