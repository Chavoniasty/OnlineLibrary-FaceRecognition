const knex = require('knex')({
    client: 'mysql2',
    debug: true,
    connection: {
        host: 'db',
        port: 3306,
        user: 'reader',
        password: 'reader',
        database: 'faceslib',
    },
});


class QueryRepository {

    facedataTable = () => knex("faces");
    favouritesTable = () => knex("favourites");

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



