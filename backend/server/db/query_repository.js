const knex = require('knex')({
    client: 'mysql2',
    debug: true,
    connection: {
        host: process.env.MY_SQL_HOST,
        port: process.env.MY_SQL_PORT,
        user: process.env.MY_SQL_READER_USER,
        password: process.env.MY_SQL_READER_PASSWORD,
        database: process.env.MY_SQL_DB_NAME,
    },
});

FACES_TABLE = 'faces';
FAVOURITES_TABLE = 'favourites';

class QueryRepository {

    facedataTable = () => knex(FACES_TABLE);
    favouritesTable = () => knex(FAVOURITES_TABLE);

    async getFaces(ageLeft, ageRight, race, gender, emotion, limit, offset) {
        let query = this.facedataTable().select('*').limit(limit ? limit : 10).offset(offset ? offset : 0);
        if (ageLeft && ageRight) {
            query = query.where('age', '>=', ageLeft).andWhere('age', '<=', ageRight);
        } else if (ageLeft) {
            query = query.where('age', '>=', ageLeft);
        } else if (ageRight) {
            query = query.where('age', '<=', ageRight);
        }
        if (race) {
            query = query.whereIn('race', race);
        }
        if (gender) {
            query = query.whereIn('gender', gender);
        }
        if (emotion) {
            query = query.whereIn('emotion', emotion);
        }
        return query;
    }

}

module.exports = QueryRepository;



