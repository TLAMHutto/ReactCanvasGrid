// src/components/DialogSelect.tsx

import React from 'react';
import Swal from 'sweetalert2';

export interface BoxSelectProps {
  column: number;
  row: number;
  onClose: () => void;
}

const DialogSelect: React.FC<BoxSelectProps> = ({ column, row, onClose }) => {
  const handleOpenDialog = async () => {
    const { value: selectedValue } = await Swal.fire({
      title: `Select field validation for Box ${String.fromCharCode('A'.charCodeAt(0) + column)}${row + 1}`,
      input: 'select',
      inputOptions: {
        Fruits: {
          apples: 'Apples',
          bananas: 'Bananas',
          grapes: 'Grapes',
          oranges: 'Oranges',
        },
        Vegetables: {
          potato: 'Potato',
          broccoli: 'Broccoli',
          carrot: 'Carrot',
        },
        icecream: 'Ice cream',
      },
      inputPlaceholder: 'Select an option',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'oranges') {
            resolve();
          } else {
            resolve('You need to select oranges :)');
          }
        });
      },
    });

    if (selectedValue) {
      Swal.fire(`You selected: ${selectedValue}`);
    }
    
    onClose(); // Close the dialog after selection
  };

  return (
    <button onClick={handleOpenDialog}>Open Select Dialog</button>
  );
};

export default DialogSelect;
