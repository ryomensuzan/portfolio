import { useEffect, useState } from 'react';
import '../styles/Cursor.css';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    const updateCursorHover = () => {
      const hoveredElements = document.querySelectorAll('a, button, .project-card, .skill-badge');
      
      hoveredElements.forEach(element => {
        element.addEventListener('mouseenter', () => setIsHovered(true));
        element.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseleave', hideCursor);
    updateCursorHover();

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`cursor-outline ${isHovered ? 'cursor-hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}