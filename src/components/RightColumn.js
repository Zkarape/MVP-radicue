// import React from 'react';
// import { Paper, TextField, Button } from '@mui/material';
// import GeneratedTextDisplay from './translateGeneratedText';

// function RightColumn({ generatedText }) {
//   return (
//     <Paper sx={{ flex: 1, padding: '20px', height: '985px', marginBottom: '35px', marginRight: '40px', borderRadius: 5 }}>
//       <TextField
//         label="Generated Text"
//         multiline
//         rows={37}
//         fullWidth
//         variant="outlined"
//         value={generatedText}
//         disabled
//       />
//       <GeneratedTextDisplay generatedText={generatedText} />
//       <Button type="submit" color="primary" style={{ width: "100px", marginTop: "45px", border: '2px solid #576db6', marginRight: '15px', color: "#4357a3" }}>
//         Cancel
//       </Button>
//       <Button variant="contained" type="submit" color="primary" style={{ width: "100px", backgroundColor: '#4357a3', marginTop: "45px", border: '2px solid #4357a3' }}>
//         Save
//       </Button>
//     </Paper>
//   );
// }

// export default RightColumn;

import React, { useState, useEffect } from 'react';
import { Paper, TextField, Button } from '@mui/material';

const apiKey = 'AIzaSyDP0X87u3mPHcwSDWJWZ8_JXFOO0gyeKLw';
const targetLanguage = 'hy'; // Language code for Armenian

function RightColumn({ generatedText }) {
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    const translateText = async (text) => {
      try {
        const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            target: targetLanguage,
          }),
        });

        const data = await response.json();
        const translatedText = data.data.translations[0].translatedText;
        setTranslatedText(translatedText);
      } catch (error) {
        console.error('Error translating text:', error);
      }
    };

    if (generatedText) {
      translateText(generatedText);
    }
  }, [generatedText]);

  // Concatenate the generated text and translated text together
  const combinedText = `${generatedText}\n\nTranslated Text (Armenian):\n\n${translatedText}`;

  return (
    <Paper sx={{ flex: 1, padding: '20px', height: '985px', marginBottom: '35px', marginRight: '40px', borderRadius: 5 }}>
      <TextField
        label="Generated Text"
        multiline
        rows={37}
        fullWidth
        variant="outlined"
        value={combinedText}
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
