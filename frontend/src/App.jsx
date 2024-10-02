import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import PredictionResult from './components/PredictionResult';

const App = () => {
    const [prediction, setPrediction] = useState(null);

    const handleUpload = async (formData) => {
        try {
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setPrediction(data.prediction);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="app">
            <h1>AI-Powered Quality Control</h1>
            <ImageUpload onUpload={handleUpload} />
            <PredictionResult result={prediction} />
        </div>
    );
};

export default App;