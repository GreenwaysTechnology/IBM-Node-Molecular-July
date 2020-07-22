const http = require('http');

const { log } = console;

const port = 3000;

/**
 * webserver
 * webapp
 * deployment
 */
//web server and web application

//webapp is represented by funciton - listener /handler function
//here request and response are just variables holding , the instance of ClientRequest
//and ServerResponse classes.

//handles client request and response in nonblocking way.
const httpListener = (request, response) => {
    //write data into response stream 
    response.write('<h1>Hello Node Web App!</h1>');
    //close the current connection
    response.end();

    //response events
    response.on('close', () => {
        //perform something when server is closed
        log(`Server is closed...`)
    })
    response.on('finish', () => {
        //perform something when server is closed
        log(`Server has committed response`);
    })

};
const server = http.createServer(httpListener);

//server events
server.on('request', (request, response) => {
    log(`Client request on  ${new Date()}`)
});

//start the server
server.listen(port, () => {
    log(`Server listens at ${port}`);
})
