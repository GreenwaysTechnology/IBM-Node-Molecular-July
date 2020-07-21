const TODOS = require('../data/todos');

class TodoRepository{
    constructor(){
        console.log('TODO Repository')
    }
    //sync method
    findAll(){
        //json paraser
        return JSON.stringify(TODOS);
    }
}
module.exports = TodoRepository;