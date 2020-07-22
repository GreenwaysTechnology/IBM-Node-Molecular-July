
//get express , returns a function/class ; to create object-application object
const express = require('express');
const todoRouter = require('./routers/todos');
const userRouter = require('./routers/users')

const port = 3001;

//create application object
const app = express();

//Link with Routers
app.use('/api/todos', todoRouter);
app.use('/api/users', userRouter);


//home path
app.get('/', (request, response) => {
    response.end('<h1>Welcome to My Application</h1>')
});





//server starts
app.listen(port, () => console.log('Express server is Ready!'));
