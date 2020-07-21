const TodoController = require('./controller/TodoController');


function start(){

    const todoCtrl= new TodoController();
    console.log(todoCtrl.findAll())

}
start();
