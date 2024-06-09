// Filter.jsx
import { useState } from 'react';

export default function Filter({ setRace, setEmotion, setGender, setMinAge, setMaxAge, getFacesFromDB }) {
    const handleRaceChange = (event) => {
        const { value, checked } = event.target;
        setRace(prevRaces => checked ? [...prevRaces, value] : prevRaces.filter(race => race !== value));
    };

    const handleEmotionChange = (event) => {
        const { value, checked } = event.target;
        setEmotion(prevEmotions => checked ? [...prevEmotions, value] : prevEmotions.filter(emotion => emotion !== value));
    };

    const handleGenderChange = (event) => {
        const { value, checked } = event.target;
        setGender(prevGender => checked ? [...prevGender, value] : prevGender.filter(gender => gender !== value));
    }

    const handleMinAgeChange = (event) => {
        setMinAge(Number(event.target.value));
    };

    const handleMaxAgeChange = (event) => {
        setMaxAge(Number(event.target.value));
    };

    return (
        <div className="flex flex-col justify-center w-full mb-4 h-1/5">
            <h1 className="text-2xl font-bold">Filter</h1>
            <div className="lg:max-w-screen-xl lg:min-w-[1024px] bg-blue-100 p-2 rounded-xl">
                <div className="flex flex-row justify-between w-full h-full">
                    <div className="flex flex-col w-1/3">
                        <h2 className="text-xl font-semibold">Filter by race:</h2>
                        <div className="grid grid-cols-2 p-2">
                            {['white', 'black', 'asian', 'middle-eastern', 'indian', 'latino'].map(race => (
                                <div key={race}>
                                    <input
                                        type="checkbox"
                                        value={race}
                                        id={`${race}-checkbox`}
                                        onChange={handleRaceChange}
                                    />
                                    <label htmlFor={`${race}-checkbox`}>{race.charAt(0).toUpperCase() + race.slice(1)}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col w-1/3">
                        <h2 className="text-xl font-semibold">Filter by emotion:</h2>
                        <div className="grid grid-cols-2">
                            {['happy', 'sad', 'suprise', 'angry', 'fear', 'neutral', 'disgust'].map(emotion => (
                                <div key={emotion}>
                                    <input
                                        type="checkbox"
                                        value={emotion}
                                        id={`${emotion}-checkbox`}
                                        onChange={handleEmotionChange}
                                    />
                                    <label htmlFor={`${emotion}-checkbox`}>{emotion.charAt(0).toUpperCase() + emotion.slice(1)}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col w-1/3">
                        <h2 className="text-xl font-semibold ">Filter by age and gender:</h2>
                        <div className="grid grid-cols-2">
                            {['man', 'woman'].map(gender => (
                                <div key={gender}>
                                    <input
                                        type='checkbox'
                                        value={gender}
                                        id={`${gender}-checkbox}`}
                                        onChange={handleGenderChange}
                                    />
                                    <label htmlFor={`${gender}-checkbox}`}>{gender.charAt(0).toUpperCase() + gender.slice(1)}</label>
                                </div>
                            ))}
                            <input
                                type="text"
                                placeholder="Minimal age"
                                id="min-age"
                                className="border-2 border-blue-800 w-28"
                                onChange={handleMinAgeChange}
                            />
                            <input
                                type="text"
                                placeholder="Maximal age"
                                id="max-age"
                                className="border-2 border-blue-800 w-28"
                                onChange={handleMaxAgeChange}
                            />
                        </div>
                        <button className="w-64 p-1 mx-4 my-2 font-bold text-white bg-blue-500 rounded-xl" onClick={() => getFacesFromDB()} >Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
