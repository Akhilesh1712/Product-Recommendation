import React from 'react';

const PredictionResult = ({ result }) => {
    return (
        <div className="prediction-result">
            {result ? (
                <h3>{result === 'defective' ? 'Defective Product' : 'Non-Defective Product'}</h3>
            ) : (
                <h3>No Prediction Yet</h3>
            )}
        </div>
    );
};

export default PredictionResult;