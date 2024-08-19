// src/components/CustomDialog.tsx

import React from 'react';

interface CustomDialogProps {
  x: number;
  y: number;
  onClose: () => void;
  buttonText?: string; // Optional button text prop
}

const CustomDialog: React.FC<CustomDialogProps> = ({ x, y, onClose, buttonText = "Close" }) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: y,
    left: x,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  };

  return (
    <div style={style}>
      <h3>Select field validation</h3>
      <select>
        <option value="apples">Apples</option>
        <option value="bananas">Bananas</option>
        <option value="grapes">Grapes</option>
        <option value="oranges">Oranges</option>
      </select>
      <button onClick={onClose}>{buttonText}</button> {/* Use buttonText prop */}
    </div>
  );
};

export default CustomDialog;
