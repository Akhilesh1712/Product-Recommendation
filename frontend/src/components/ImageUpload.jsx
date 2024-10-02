import React, { useState } from 'react';

const ImageUpload = ({ onUpload }) => {
    const [image, setImage] = useState(null);
    
    const handleChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = () => {
        if (image) {
            const formData = new FormData();
            formData.append('file', image);
            onUpload(formData);
        }
    };

    return (
        <div className="image-upload">
            <input type="file" accept="image/*" onChange={handleChange} />
            <button onClick={handleUpload}>Upload Image</button>
        </div>
    );
};

export default ImageUpload;
