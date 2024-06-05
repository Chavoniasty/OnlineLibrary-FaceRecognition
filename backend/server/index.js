const express = require('express');
const QueryRepository = require('./db/query_repository');
const { DbEnums } = require('./db/db_enums');

const app = express();

const queryRepository = new QueryRepository();

app.get('/', async (req, res) => {
    queryRepository.getFaces(10,
        null,
        [DbEnums.Races.WHITE, DbEnums.Races.BLACK],
        [DbEnums.Genders.WOMAN],
        [DbEnums.Emotions.HAPPY]).then((u) => {
            res.send(u);
        });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});