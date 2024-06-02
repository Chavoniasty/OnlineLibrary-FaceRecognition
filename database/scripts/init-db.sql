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

CREATE TABLE IF NOT EXISTS faceslib.users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL, -- `BCrypt hash` according to bcrypt.node.docs result is 60 characters long.
    email VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS faceslib.favourites (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    face_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES faceslib.users(id),
    FOREIGN KEY (face_id) REFERENCES faceslib.faces(id)
);

INSERT INTO faceslib.users (username, password, email)
VALUES ('GUEST_USER', 'GUEST_PASSWORD', 'guest@email.com'); 

/*
INSERT INTO faceslib.faces (age, race, emotion, gender, facedata)
VALUES (12, 'white', 'happy', 'man', 'data');
SELECT LAST_INSERT_ID();
*/