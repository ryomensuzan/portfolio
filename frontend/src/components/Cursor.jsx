import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorHover = () => {
      const hoveredElements = document.querySelectorAll('a, button');
      
      hoveredElements.forEach(element => {
        element.addEventListener('mouseenter', () => setIsHovered(true));
        element.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    document.addEventListener('mousemove', updateCursorPosition);
    updateCursorHover();

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

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