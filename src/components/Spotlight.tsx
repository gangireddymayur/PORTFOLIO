import React, { useEffect, useState } from 'react';

const Spotlight: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-300">
      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.12), transparent 80%)`,
        }}
      />

      {/* Secondary Cyan Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.08), transparent 70%)`,
        }}
      />
    </div>
  );
};

export default Spotlight;
