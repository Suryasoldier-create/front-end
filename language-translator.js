import React, { useState, useEffect } from 'react';

// Main App component for the text translator
const App = () => {
    // State to hold the English text input by the user
    const [inputText, setInputText] = useState('');
    // State to hold the selected target language for translation
    const [targetLanguage, setTargetLanguage] = useState('es'); // Default to Spanish
    // State to hold the translated text
    const [translatedText, setTranslatedText] = useState('');
    // State to manage the loading status during translation
    const [isLoading, setIsLoading] = useState(false);
    // State to manage any error messages
    const [error, setError] = useState('');

    // Define the available languages for translation
    const languages = [
         { code: 'hi', name: 'Hindi' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'it', name: 'Italian' },
        { code: 'pt', name: 'Portuguese' },
        { code: 'ja', name: 'Japanese' },
        { code: 'ko', name: 'Korean' },
        { code: 'zh', name: 'Chinese (Simplified)' },
        { code: 'ar', name: 'Arabic' },
        { code: 'ru', name: 'Russian' },
    ];

    // Mock function to simulate a RapidAPI translation call
    // In a real application, you would replace this with an actual fetch call to RapidAPI
    const mockTranslateText = async (text, langCode) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simple mock translation logic
                let result = '';
                switch (langCode) {
                    case 'hi':
                        result = text.replace(/hello/gi, 'namaste').replace(/world/gi, 'mundo') + ' (Hindi)';
                        break;
                    case 'es':
                        result = text.replace(/hello/gi, 'hola').replace(/world/gi, 'mundo') + ' (Spanish)';
                        break;
                    case 'fr':
                        result = text.replace(/hello/gi, 'bonjour').replace(/world/gi, 'monde') + ' (French)';
                        break;
                    case 'de':
                        result = text.replace(/hello/gi, 'hallo').replace(/world/gi, 'welt') + ' (German)';
                        break;
                    case 'it':
                        result = text.replace(/hello/gi, 'ciao').replace(/world/gi, 'mondo') + ' (Italian)';
                        break;
                    case 'pt':
                        result = text.replace(/hello/gi, 'olá').replace(/world/gi, 'mundo') + ' (Portuguese)';
                        break;
                    case 'ja':
                        result = text.replace(/hello/gi, 'こんにちは').replace(/world/gi, '世界') + ' (Japanese)';
                        break;
                    case 'ko':
                        result = text.replace(/hello/gi, '안녕하세요').replace(/world/gi, '세계') + ' (Korean)';
                        break;
                    case 'zh':
                        result = text.replace(/hello/gi, '你好').replace(/world/gi, '世界') + ' (Chinese)';
                        break;
                    case 'ar':
                        result = text.replace(/hello/gi, 'مرحبا').replace(/world/gi, 'عالم') + ' (Arabic)';
                        break;
                    case 'ru':
                        result = text.replace(/hello/gi, 'привет').replace(/world/gi, 'мир') + ' (Russian)';
                        break;
                    default:
                        result = text + ` (Translated to ${langCode})`;
                }
                resolve(result);
            }, 1500); // Simulate network delay
        });
    };

    // Function to handle the translation process
    const handleTranslate = async () => {
        if (!inputText.trim()) {
            setError('Please enter text to translate.');
            setTranslatedText('');
            return;
        }

        setIsLoading(true);
        setError('');
        setTranslatedText('');

        try {
            // --- Start of RapidAPI Integration Placeholder ---
            // In a real application, you would use your RapidAPI key and endpoint here.
            // Example structure (replace with actual RapidAPI details):

            // const RAPIDAPI_KEY = 'YOUR_RAPIDAPI_KEY_HERE'; // Get your key from RapidAPI
            // const RAPIDAPI_HOST = 'google-translate1.p.rapidapi.com'; // Example host

            // const response = await fetch(`https://${RAPIDAPI_HOST}/language/translate/v2`, {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/x-www-form-urlencoded',
            //         'Accept-Encoding': 'application/gzip',
            //         'X-RapidAPI-Key': RAPIDAPI_KEY,
            //         'X-RapidAPI-Host': RAPIDAPI_HOST
            //     },
            //     body: new URLSearchParams({
            //         q: inputText,
            //         target: targetLanguage,
            //         source: 'en' // Assuming source is always English
            //     }).toString()
            // });

            // if (!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }

            // const data = await response.json();
            // const translated = data.data.translations[0].translatedText;
            // setTranslatedText(translated);

            // --- End of RapidAPI Integration Placeholder ---

            // Using the mock translation function for demonstration
            const translated = await mockTranslateText(inputText, targetLanguage);
            setTranslatedText(translated);

        } catch (err) {
            console.error('Translation error:', err);
            setError('Failed to translate text. Please try again later.');
            setTranslatedText('');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 font-inter">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border border-gray-200">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Text Translator
                    </span>
                </h1>

                {/* Input Section */}
                <div className="mb-6">
                    <label htmlFor="inputText" className="block text-lg font-semibold text-gray-700 mb-2">
                        Enter English Text:
                    </label>
                    <textarea
                        id="inputText"
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-200 resize-y min-h-[120px] text-gray-800"
                        placeholder="Type your text here..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        rows="5"
                    ></textarea>
                </div>

                {/* Language Selection and Translate Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                    <div className="w-full sm:w-auto flex-grow">
                        <label htmlFor="languageSelect" className="block text-lg font-semibold text-gray-700 mb-2">
                            Select Target Language:
                        </label>
                        <select
                            id="languageSelect"
                            className="w-full p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-200 text-gray-800 appearance-none pr-8"
                            value={targetLanguage}
                            onChange={(e) => setTargetLanguage(e.target.value)}
                        >
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={handleTranslate}
                        className={`mt-6 sm:mt-0 px-8 py-3 rounded-xl font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-105
                            ${isLoading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg'
                            }`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Translating...
                            </div>
                        ) : (
                            'Translate'
                        )}
                    </button>
                </div>

                {/* Translated Output Section */}
                <div className="mb-6">
                    <label htmlFor="translatedText" className="block text-lg font-semibold text-gray-700 mb-2">
                        Translated Text:
                    </label>
                    <div
                        id="translatedText"
                        className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 min-h-[120px] text-gray-800 break-words"
                    >
                        {translatedText || (error ? <span className="text-red-600">{error}</span> : 'Your translated text will appear here.')}
                    </div>
                </div>

                {/* Instructions for RapidAPI */}
                <div className="text-sm text-gray-600 mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="font-semibold mb-2">How to integrate with RapidAPI:</p>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>Sign up on RapidAPI and subscribe to a translation API (e.g., Google Translate API).</li>
                        <li>Get your unique RapidAPI Key and Host from the API's dashboard.</li>
                        <li>Replace the mock translation logic in the `handleTranslate` function with the actual `fetch` call using your RapidAPI Key and Host.</li>
                        <li>Ensure the API endpoint, headers, and body parameters match the documentation of the chosen RapidAPI.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default App;
