const http = require('http');
const TodoService = require('./api/TodoService');

const { log } = console;

//create todo object
const todoService = new TodoService();
const port = 3000;

//request and reponse represents a stream ; duplex stream
//input and output streams.

const server = http.createServer((request, response) => {

    //echo use case
    //attach request event - data 
    let data = '';
    request.on('data', (chunk) => {
        log('request event is called')
        data += chunk;
    });
    request.on('end', () => {
        log(data);
        response.write(data);
        response.end();
    });

});

//server events
server.on('request', (request, response) => {
    log(`Client request on  ${new Date()}`)
});

//start the server
server.listen(port, () => {
    log(`Server listens at ${port}`);
})
