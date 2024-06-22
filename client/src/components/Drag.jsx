import React, { useState } from 'react';

const DragAndDrop = () => {
    const [dragging, setDragging] = useState(false);
    const [isResponse, setIsResponse] = useState(false);
    const [tempRace, setTempRace] = useState("");
    const [tempGender, setTempGender] = useState("");
    const [tempAge, setTempAge] = useState("");
    const [tempBase64, setTempBase64] = useState("");
    const [tempEmotion, setTempEmotion] = useState("");


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
                let base64String = reader.result;

                // Extract the base64 string without the prefix
                const base64Content = base64String.split(',')[1];

                // Send the base64 content to the backend
                fetch('http://localhost:3000/processPhoto', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ facedata: base64Content }),
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.text();  // Read the response as text
                    })
                    .then(text => {
                        // Try to parse the response as JSON
                        try {
                            const data = JSON.parse(text);
                            setIsResponse(true);
                            setTempAge(data.age);
                            setTempBase64(data.base64);
                            setTempEmotion(data.emotion);
                            setTempGender(data.gender)
                            setTempRace(data.race);
                            console.log(base64Content);
                            setTempBase64(base64Content);
                            console.log(tempBase64)
                            console.log(data);
                        } catch (error) {
                            console.error('Error parsing JSON:', error);
                            console.log('Response text:', text);
                        }
                    })
                    .catch(error => console.error('Error:', error));
            };
            reader.readAsDataURL(file);
        }
    };

    const sendToBackend = () => {
        setIsResponse(false);
        const data = {
            age: tempAge,
            gender: tempGender,
            race: tempRace,
            emotion: tempEmotion,
            facedata: tempBase64
        };

        fetch('http://localhost:3000/addPhotoToDB', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();  // Read the response as JSON
            })
            .then(data => {
                console.log('Successfully saved to the database:', data);
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <>
            {isResponse == true ?
                <div className='flex flex-row`'>
                    <div>
                        <img src={`data:image/png;base64,${tempBase64}`} />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-around'>
                            <p>Age: </p>
                            <input className="border-2 border-black" type='text' value={tempAge} onChange={() => setTempAge} />
                        </div>
                        <div className='flex flex-row justify-around'>
                            <p>Race: </p>
                            <input className="border-2 border-black" type='text' value={tempRace} onChange={() => setTempRace} />
                        </div>
                        <div className='flex flex-row justify-around'>
                            <p>Gender: </p>
                            <input className="border-2 border-black" type='text' value={tempGender} onChange={() => setTempGender} />
                        </div>
                        <div className='flex flex-row justify-around'>
                            <p>Emotion: </p>
                            <input className="border-2 border-black" type='text' value={tempEmotion} onChange={() => setTempEmotion} />
                        </div>
                        <button className='bg-yellow-400 rounded-xl' onClick={() => setIsResponse(false)}>Back</button>
                        {/* // Save the data to the database */}
                        <button className='bg-green-400 rounded-xl' onClick={() => sendToBackend()}>Save</button>
                    </div>

                </div>
                :
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
                    }
                    }
                >
                    {dragging ? 'Drop the file here...' : 'Drag and drop an image file here or click to select a file'}
                </div >

            }
        </>
    );
};

export default DragAndDrop;
