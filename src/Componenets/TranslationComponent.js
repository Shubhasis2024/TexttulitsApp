// TranslationComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const TranslationComponent = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const translateText = async () => {
    const apiKey = 'AIzaSyBZ2Z_sY_qMvCenzukWpU7Bcllj9kG_c9U'; // Add your Google Translate API key here
    const url = ` https://translation.googleapis.com/language/translate/v2`;

    try {
      const response = await axios.post(url, {}, {
        params: {
          q: inputText,
          target: 'bn',   // 'bn' is the language code for Bengali
          source: 'en',   // 'en' is the language code for English
          key: apiKey,
        },
      });

      // Get the translated text from the response
      const translated = response.data.data.translations[0].translatedText;
      setTranslatedText(translated);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div>
      <h1>English to Bengali Translator</h1>
      <textarea
        placeholder="Enter text in English"
        value={inputText}
        onChange={handleInputChange}
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={translateText}>Translate</button>

      <div>
        <h2>Translated Text (Bengali):</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default TranslationComponent;
