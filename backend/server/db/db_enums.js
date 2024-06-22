
class DbEnums {
    static get Emotions() {
        return Emotion;
    }
    static get Races() {
        return Race;
    }
    static get Genders() {
        return Gender;
    }
}
class Gender {
    static WOMAN = 'woman';
    static MAN = 'man';
}

class Emotion {
    static ANGRY = 'angry';
    static FEAR = 'fear';
    static NEUTRAL = 'neutral';
    static SAD = 'sad';
    static DISGUST = 'disgust';
    static HAPPY = 'happy';
    static SURPRISE = 'surprise';
}

class Race {
    static ASIAN = 'asian';
    static WHITE = 'white';
    static MIDDLE_EASTERN = 'middle eastern';
    static INDIAN = 'indian';
    static LATINO = 'latino';
    static BLACK = 'black';
}

exports.DbEnums = DbEnums;