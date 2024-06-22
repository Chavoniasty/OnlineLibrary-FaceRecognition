const knex = require('knex')({
    client: 'mysql2',
    debug: true,
    connection: {
        host: process.env.MY_SQL_HOST,
        port: process.env.MY_SQL_PORT,
        user: process.env.MY_SQL_WRITER_USER,
        password: process.env.MY_SQL_WRITER_PASSWORD,
    },
});

FACES_TABLE = 'faceslib.faces';
FAVOURITES_TABLE = 'faceslib.favourites';

class AdminRepository {

    facedataTable = () => knex(FACES_TABLE);
    favouritesTable = () => knex(FAVOURITES_TABLE);

    async insertFaceRecord(age_, gender_, race_, emotion_, faceData_) {
        return this.facedataTable().insert({
            age: age_,
            gender: gender_,
            race: race_,
            emotion: emotion_,
            facedata: faceData_,
        }, "id");
    }
}

USERS_TABLE = 'faceslib.users';

class AuthRepository {

    usersTable = () => knex(USERS_TABLE);

    async getUser(userName) {
        return this.usersTable().select('*').where('username', userName).first();
    }

    async authenticateUser(userName, password) {
        let user = await this.getUser(userName)
        if (!user) {
            return [null, 404, "User not found"];
        }
        if (user.password !== password) {
            return [null, 401, "Unauthorized"];
        }
        return [user, 200, "Login successful"];
    }
}

exports.AuthRepository = AuthRepository;
exports.AdminRepository = AdminRepository;