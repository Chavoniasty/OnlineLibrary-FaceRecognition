const express = require('express');
var messages = require('./helloworld_pb');
var services = require('./helloworld_grpc_pb');

const target = "localhost:50051";

var grpc = require('@grpc/grpc-js');
const client = new services.GreeterClient(target,
    grpc.credentials.createInsecure());



var request = new messages.HelloRequest();
request.setName("amigo")

const app = express();



app.get('/', async (req, res) => {
    client.sayHello(request, await function (err, resp) {
        const temp = resp.getMessage();
        console.log(temp)
        res.send(temp);
    })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});