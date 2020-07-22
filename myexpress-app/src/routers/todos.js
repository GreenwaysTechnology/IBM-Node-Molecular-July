const express = require('express');
//const todoservice = require('../services/TodoService');
const { findAll } = require('../services/TodoService');

//create Router instance
const todoRouter = express.Router();

todoRouter.use((req, res, next) => {
    //middleware logic
    console.log(`todos middleware called`)
    //at end you have to call
    next();
});

todoRouter.get('/list', async (request, response) => {
    //json
    // let todos = await todoservice.findAll()
    let todos = await findAll();
    response.json(todos);

})
todoRouter.post('/', (request, response) => {
    response.end('todo list : Post')
})
todoRouter.delete('/', (request, response) => {
    response.end('todo list : delete')
})
todoRouter.put('/', (request, response) => {
    response.end('todo list : puts')
})

module.exports = todoRouter;