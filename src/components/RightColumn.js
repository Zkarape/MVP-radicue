import React from 'react';
import { Paper, TextField, Button } from '@mui/material';

function RightColumn({ generatedText }) {
  return (
    <Paper sx={{ flex: 1, padding: '20px', height: '985px', marginBottom: '35px', marginRight: '40px', borderRadius: 5 }}>
      <TextField
        label="Generated Text"
        multiline
        rows={37}
        fullWidth
        variant="outlined"
        value={generatedText}
        disabled
      />
      <Button type="submit" color="primary" style={{ width: "100px", marginTop: "45px", border: '2px solid #576db6', marginRight: '15px', color: "#4357a3" }}>
        Cancel
      </Button>
      <Button variant="contained" type="submit" color="primary" style={{ width: "100px", backgroundColor: '#4357a3', marginTop: "45px", border: '2px solid #4357a3' }}>
        Save
      </Button>
    </Paper>
  );
}

export default RightColumn;
