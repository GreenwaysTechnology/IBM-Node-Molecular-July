
const TodoService = require('./api/TodoService');


//Access todo app
let todoService = new TodoService();
//sync call
function syncCall() {
    console.log('start todo')
    console.log(todoService.findAllSync());
    console.log('end todo')
}
//syncCall()

function asyncCall() {
    console.log('start todo')

    todoService.findAllAsync(todos => {
        console.log(todos);
    });
    console.log('end todo')

}
//asyncCall();

function asyncCallWithPromise() {
    console.log('start todo')
    todoService.findAllAsyncWithPromise().then(todos => console.log(todos));
    console.log('end todo')

}
asyncCallWithPromise();

async function asyncCallWithAsyncAwait() {
    try {
        let todos = await todoService.findAllAsyncWithPromise()
        console.log(todos);
    } catch (err) {
        console.log(err)
    }
    finally {
        console.log('done');
    }
}
asyncCallWithAsyncAwait()
