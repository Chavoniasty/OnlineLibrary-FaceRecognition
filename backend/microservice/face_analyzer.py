"""Face Analyzer module"""

import base64

from deepface import DeepFace
import cv2
import numpy as np


class FaceAnalyzer:
    """Face Analyzer class"""

    def analyze(self, image_data: str) -> dict[str, int | str]:
        """Analyze the face in the image and return age, emotion, race, gender.

        Args:
            image_data (str): Image data in base64 format
        """
        original = base64.b64decode(image_data)
        npbuff = np.frombuffer(original, dtype=np.uint8)
        image = cv2.imdecode(npbuff, flags=1)

        result = DeepFace.analyze(image, actions=["age", "emotion", "gender", "race"])
        res = result.pop()  # alway expect one face in the image
        age: int = int(res["age"])
        emotion: str = res["dominant_emotion"]
        race: str = res["dominant_race"]
        gender: str = res["dominant_gender"]
        return {"age": age, "emotion": emotion, "race": race, "gender": gender.lower()}
