const TodoRepository = require('../respository/TodoRepository');

class TodoService {
    todoRepository = null;
    constructor() {
        console.log('TodoService')
        this.todoRepository = new TodoRepository();
    }
    findAll() {
        return this.todoRepository.findAll();
    }
}
module.exports = TodoService;