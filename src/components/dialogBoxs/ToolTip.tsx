// src/components/Tooltip.tsx
import React from 'react';

interface TooltipProps {
  x: number;
  y: number;
  content: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ x, y, content }) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: y + window.scrollY,
    left: x + window.scrollX,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '4px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  };

  return <div style={style}>{content}</div>;
};

export default Tooltip;
