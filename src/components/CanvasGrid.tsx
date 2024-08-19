import React, { useRef, useEffect, useState } from 'react';
import '../styles/canvas.css';

const CanvasGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredBox, setHoveredBox] = useState<{ column: number; row: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Define grid properties
    const numColumns = 10;
    const numRows = 10;
    const columnWidth = canvas.width / numColumns;
    const rowHeight = canvas.height / numRows;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid lines
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

    // Vertical lines
    for (let i = 1; i < numColumns; i++) {
      ctx.beginPath();
      ctx.moveTo(i * columnWidth, 0);
      ctx.lineTo(i * columnWidth, canvas.height);
      ctx.stroke();
    }

    // Horizontal lines
    for (let i = 1; i < numRows; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * rowHeight);
      ctx.lineTo(canvas.width, i * rowHeight);
      ctx.stroke();
    }

    // Draw identifiers
    ctx.fillStyle = 'black';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const columnLabels = 'ABCDEFGHIJ'; // Assuming 10 columns
    for (let i = 0; i < numColumns; i++) {
      const x = i * columnWidth + columnWidth / 2;
      const y = canvas.height - 20; // Position text at bottom of each column
      ctx.fillText(columnLabels[i], x, y);
    }

    for (let i = 0; i < numRows; i++) {
      const x = 20; // Position text on the side of each row
      const y = i * rowHeight + rowHeight / 2;
      ctx.fillText((i + 1).toString(), x, y);
    }

    // Highlight the hovered box
    if (hoveredBox) {
      ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
      ctx.fillRect(hoveredBox.column * columnWidth, hoveredBox.row * rowHeight, columnWidth, rowHeight);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const column = Math.floor(x / columnWidth);
      const row = Math.floor(y / rowHeight);

      if (column >= 0 && column < numColumns && row >= 0 && row < numRows) {
        const columnLabel = String.fromCharCode('A'.charCodeAt(0) + column); // Convert index to letter
        const rowLabel = (row + 1).toString(); // Row numbers are 1-based
        const boxLabel = `${columnLabel}${rowLabel}`;
        
        setHoveredBox({ column, row });
        console.log(`Hovered Box: ${boxLabel}`); // Log the box label
      }
    };

    const handleMouseClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const column = Math.floor(x / columnWidth);
      const row = Math.floor(y / rowHeight);

      if (column >= 0 && column < numColumns && row >= 0 && row < numRows) {
        const columnLabel = String.fromCharCode('A'.charCodeAt(0) + column); // Convert index to letter
        const rowLabel = (row + 1).toString(); // Row numbers are 1-based
        const boxLabel = `${columnLabel}${rowLabel}`;
        
        console.log(`Clicked Box: ${boxLabel}`); // Log the box label on click
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleMouseClick);

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleMouseClick);
    };
  }, [hoveredBox]);

  return <canvas ref={canvasRef} width={1000} height={800}></canvas>;
};

export default CanvasGrid;
