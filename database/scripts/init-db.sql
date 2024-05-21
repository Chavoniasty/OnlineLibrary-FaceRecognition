CREATE TABLE IF NOT EXISTS faceslib.faces (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    age TINYINT UNSIGNED NOT NULL,
    race ENUM('asian', 'white', 'middle eastern', 'indian', 'latino', 'black') NOT NULL,
    emotion ENUM('angry', 'fear', 'neutral', 'sad', 'disgust', 'happy','surprise') NOT NULL,
    gender ENUM('man', 'woman') NOT NULL,
    facedata BLOB NOT NULL,
    INDEX age_index (age),
    INDEX gender_index (gender),
    INDEX emotion_index (emotion),
    INDEX race_index (race),
    INDEX group_index (age, gender, emotion, race)
);

/*
INSERT INTO faceslib.faces (age, race, emotion, gender, facedata)
VALUES (12, 'white', 'happy', 'man', 'data');
SELECT LAST_INSERT_ID();
*/