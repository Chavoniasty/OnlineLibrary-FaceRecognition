const express = require('express');
const zerorpc = require('zerorpc');

const app = express();
const client = new zerorpc.Client();

app.get('/', (req, res) => {
    res.send('Hello World');    
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');    
});