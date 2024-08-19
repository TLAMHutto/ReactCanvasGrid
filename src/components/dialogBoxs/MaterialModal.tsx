import React, { useState } from 'react';
import { Modal, Box, Typography, Button, TextField, MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';

const MaterialModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`You selected: ${selectedValue}`);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 400, margin: 'auto', marginTop: '20%', padding: 2, backgroundColor: 'white', borderRadius: 1 }}>
        <Typography variant="h6">Select an Option</Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel>Select an option</InputLabel>
          <Select value={selectedValue} onChange={handleSelectChange}>
            <MenuItem value="apples">Apples</MenuItem>
            <MenuItem value="bananas">Bananas</MenuItem>
            <MenuItem value="grapes">Grapes</MenuItem>
            <MenuItem value="oranges">Oranges</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        <Button variant="outlined" color="secondary" onClick={onClose}>Close</Button>
      </Box>
    </Modal>
  );
};

export default MaterialModal;