const express = require('express');
const QueryRepository = require('./db/query_repository');
const { DbEnums } = require('./db/db_enums');
const { Paginator } = require('./utils/pagination');

const app = express();

const queryRepository = new QueryRepository();

app.get('/', async (req, res) => {
    try {
        let params = req.query;
        let limit = Paginator.clipLimit(req);
        let data = await queryRepository.getFaces(
            params.ageLeft ?? null,
            params.ageRight ?? null,
            params.race ? params.race.split(',') : null,
            params.gender ? params.gender.split(',') : null,
            params.emotion ? params.emotion.split(',') : null,
            limit,
            params.offset ?? 0
        );
        if (data.length === 0) {
            res.status(404).json({
                "message": "No data found"
            });
            return;
        }
        res.json({
            "data": data,
            "nextPage": Paginator.getNextPage(req),
            "hasNextPage": data.length >= limit
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            "message": "Internal server error"
        });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});