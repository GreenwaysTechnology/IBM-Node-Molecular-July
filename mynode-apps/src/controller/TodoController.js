const TodoService = require('../services/TodoService');

class TodoController {
    todoService = null;
    constructor() {
        console.log('TodoController')
        this.todoService = new TodoService();
    }
    findAll() {
        return this.todoService.findAll();
    }
}
module.exports = TodoController;