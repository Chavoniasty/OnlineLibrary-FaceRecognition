const express = require('express');
const QueryRepository = require('./db/query_repository');
const { Paginator } = require('./utils/pagination');
const { AuthRepository } = require('./db/admin_repository');

const app = express();

const queryRepository = new QueryRepository();
const authRepository = new AuthRepository();

app.get('/faces', async (req, res) => {
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
        data.forEach((elem) => {
            elem.facedata = Buffer.from(elem.facedata).toString('base64')
        })
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

app.get('/login', async (req, res) => {
    try {
        let params = req.query;
        if (!params.username || !params.password) {
            res.status(400).json({
                "message": "Username and password are required"
            });
            return;
        }
        let [user, code, msg] = await authRepository.authenticateUser(params.username, params.password);
        if (!user) {
            res.status(code).json({
                "message": msg
            });
            return;
        }
        console.log(user.is_admin)
        res.json({
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "isAdmin": Buffer.from(user.is_admin).toString() != '0'
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