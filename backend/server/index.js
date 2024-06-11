const express = require('express');
var messages = require('./helloworld_pb');
var services = require('./helloworld_grpc_pb');
var fam = require("./face_analyzer_pb");
var fas = require("./face_analyzer_grpc_pb");

const cors = require('cors');

const target = "microservice:50051";

var grpc = require('@grpc/grpc-js');
const client = new services.GreeterClient(target,
    grpc.credentials.createInsecure());

const faceAnalysisService = new fas.FaceAnalysisClient(target, grpc.credentials.createInsecure());

var request = new messages.HelloRequest();
request.setName("amigo")

const app = express();
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));

app.get('/', async (req, res) => {
    client.sayHello(request, function (err, resp) {
        const temp = resp.getMessage();
        console.log(temp)
        res.send(temp);
    })
});

app.get('/test', async (req, res) => {
    // set correct params from request
    var analyzeFaceRequest = new fam.AnalyzeFaceRequest();
    faceAnalysisService.analyzeFace(analyzeFaceRequest, function (err, resp) {
        if (err) {
            // do some error handling here
            res.send("There was an error")
        } else {
            console.log(resp)
            res.send(resp);
        }
    })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});