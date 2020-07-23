const express = require('express');
const { response } = require('./app-1');


const app = express();

app.get('/', function (request, response) {
    response.end('Hello')
});

app.listen('8081', function () {
    console.log('server is running!!!');
});