
//get express , returns a function/class ; to create object-application object
const express = require('express');
const bodyParser = require('body-parser')
const todoRouter = require('./routers/todos');


const port = 3001;

const { log } = console;
//create application object
const app = express();

////////////////////////////////////////////////////////////////////////////////
//custom global middleware
app.use((req, res, next) => {
    //middleware logic
    log(`Request received from ${req.url} on ${req.method}`)
    //at end you have to call
    next();
});
////////////////////////////////////////////////////////////////
app.use('/api/todos', todoRouter);
////////////////////////////////////////////////////////////////////////////////
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/////////////////////////////////////////////////////////////////////////////////////

//home path
app.get('/', (request, response) => {
    response.end('<h1>Welcome to My Application</h1>')
});
//request payload
app.post('/api/greet', (request, response) => {
    // let data = '';
    // request.on('data', (chunk) => {
    //     log('request event is called')
    //     data += chunk;
    // });
    // request.on('end', () => {
    //     log(data);
    //     response.end(data);
    // });

    let data = request.body;
    log(data);
    response.json(data);


})

//server starts
app.listen(port, () => console.log('Express server is Ready!'));
