
const express = require('express');
const userRouter = express.Router();

userRouter.get('/list', (request, response) => {
    response.end('users list : get')
});
userRouter.post('/', (request, response) => {
    response.end('users list : Post')
})
userRouter.delete('/', (request, response) => {
    response.end('todo list : delete')
})
userRouter.put('/', (request, response) => {
    response.end('users list : puts')
})

module.exports = userRouter;