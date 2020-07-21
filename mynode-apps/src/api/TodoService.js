const TODOS = require('../data/todos')

class TodoService {
    constructor() {

    }
    findAllSync() {
        return JSON.stringify(TODOS);
    }
    //i want to return todos async
    findAllAsync(handler) {
        //todos data will be returned after 5sec
        setTimeout(handler, 5000, TODOS)
    }
    findAllAsyncWithPromise() {
        //todos data will be returned after 5sec
        //setTimeout(handler, 5000, TODOS)
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, TODOS)
        });
    }


}
module.exports = TodoService;