from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import os

app = Flask(__name__)
model = load_model('model.h5')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

   
    img = Image.open(file)
    img = img.resize((224, 224)) 
    img_array = np.array(img) / 255.0  
    img_array = np.expand_dims(img_array, axis=0)  
    prediction = model.predict(img_array)
    result = 'defective' if prediction[0][0] > 0.5 else 'non_defective'

    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)
