const express = require('express');
var fam = require("./face_analyzer_pb");
var fas = require("./face_analyzer_grpc_pb");

const cors = require('cors');

const target = "microservice:50051";

var grpc = require('@grpc/grpc-js');

const faceAnalysisService = new fas.FaceAnalysisClient(target, grpc.credentials.createInsecure());

const QueryRepository = require('./db/query_repository');
const { Paginator } = require('./utils/pagination');
const { AuthRepository, AdminRepository } = require('./db/admin_repository');

const app = express();
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));

app.use(express.json());

const queryRepository = new QueryRepository();
const authRepository = new AuthRepository();
const adminRepository = new AdminRepository();

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

app.get('/', async (req, res) => {
    res.json({
        "status": "Healthy"
    });
});

app.post('/addPhotoToDB', async (req, res) => {
    let body = req.body;
    let id = await adminRepository.insertFaceRecord(
        body.age,
        body.gender,
        body.race,
        body.emotion,
        body.facedata,
    )
    res.json({
        "id": id[0]
    });
});


app.post('/processPhoto', async (req, res) => {
    let facedata = req.body.facedata;
    var analyzeFaceRequest = new fam.AnalyzeFaceRequest();
    analyzeFaceRequest.setBase64string(facedata);
    faceAnalysisService.analyzeFace(analyzeFaceRequest, function (err, resp) {
        if (err) {
            res.send("There was an error")
        } else {
            console.log(resp)
            let [age, race, gender, emotion] = resp.array
            res.json({
                "age": age,
                "race": race,
                "gender": gender,
                "emotion": emotion
            });
        }
    })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});