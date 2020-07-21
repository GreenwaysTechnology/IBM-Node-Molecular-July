const fs = require('fs')
const path = require('path');
const { log } = console;

const fileName = path.join(__dirname, 'assets/info.txt');
const config = {
    encoding: 'UTF-8'
};

//create Read stream
const inputStream = fs.createReadStream(fileName, config);

//starts attaching listerners
//data event is emitted by os for each chunk of data

let data = '';
inputStream.on('data', chunk => {
    log(`Received ${chunk.length} bytes of data.`)
    //log(chunk)
    data += chunk;
})

//end event is called , no more chunk of data is availble.
inputStream.on('end', () => {
    log('end is called');
    log(data);
})

//error event: for error handling
inputStream.on('error', err => {
    log('error')
});
