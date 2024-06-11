// src/DragAndDrop.js
import React, { useState } from 'react';

const DragAndDrop = () => {
    const [dragging, setDragging] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                console.log(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{
                border: dragging ? '2px dashed #000' : '2px solid #000',
                borderRadius: '4px',
                padding: '20px',
                width: '300px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            {dragging ? 'Drop the file here...' : 'Drag and drop an image file here or click to select a file'}
        </div>
    );
};

export default DragAndDrop;
