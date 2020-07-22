const TODOS = require('../data/todos')

class TodoService {
    constructor() {
    }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, TODOS)
        });
    }
}

//export object
module.exports = new TodoService();