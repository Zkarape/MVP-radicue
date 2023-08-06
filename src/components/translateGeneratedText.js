import React, { useState, useEffect } from 'react';

const GeneratedTextDisplay = ({ generatedText }) => {
    const [translatedText, setTranslatedText] = useState('');
  
    const apiKey = 'AIzaSyDP0X87u3mPHcwSDWJWZ8_JXFOO0gyeKLw';
    const targetLanguage = 'hy'; // Language code for Armenian
  
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
        return translatedText;
      } catch (error) {
        console.error('Error translating text:', error);
        return null;
      }
    };
  
    useEffect(() => {
      // Call the translation function when the generatedText prop changes
      if (generatedText) {
        translateText(generatedText).then((translation) => {
          setTranslatedText(translation);
        });
      }
    }, [generatedText]);
  
    return (
      <div>
        <p>{translatedText}</p>
      </div>
    );
  };

  export default GeneratedTextDisplay;
  