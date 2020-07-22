const http = require('http');
const TodoService = require('./api/TodoService');

const { log } = console;

//create todo object
const todoService = new TodoService();

const port = 3000;

const httpListener = async (request, response) => {
    //write data into response stream 
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    let todos = await todoService.findAllAsyncWithPromise();
    response.write(JSON.stringify(todos));
    //close the current connection
    response.end();

};

//const server = http.createServer(httpListener)

const server = http.createServer(async (request, response) => {
    //write data into response stream 
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    let todos = await todoService.findAllAsyncWithPromise();
    response.write(JSON.stringify(todos));
    //close the current connection
    response.end();

});

//server events
server.on('request', (request, response) => {
    log(`Client request on  ${new Date()}`)
});

//start the server
server.listen(port, () => {
    log(`Server listens at ${port}`);
})
