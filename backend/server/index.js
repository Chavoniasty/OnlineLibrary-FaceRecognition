const express = require('express');
const QueryRepository = require('./db/query_repository');
const { DbEnums } = require('./db/db_enums');
const { Paginator } = require('./utils/pagination');

const app = express();

const queryRepository = new QueryRepository();

app.get('/', async (req, res) => {
    console.log(req.query)
    let params = req.query;
    let data = await queryRepository.getFaces(
        params.ageLeft ?? null,
        params.ageRight ?? null,
        params.race ? params.race.split(',') : null,
        params.gender ? params.gender.split(',') : null,
        params.emotion ? params.emotion.split(',') : null,
        params.limit ?? Paginator.PAGINATION_LIMIT,
        params.offset ?? 0
    );
    res.json({
        "data": data,
        "nextPage": Paginator.getNextPage(req),
        "hasNextPage": data.length >= (params.limit ? parseInt(params.limit) : Paginator.PAGINATION_LIMIT)
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});