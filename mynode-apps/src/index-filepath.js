//file system io
const fs = require('fs');
const path = require('path');


//read file : non blocking

//const filePath = './src/assets/info.txt';
const filePath = path.join(__dirname,'assets/info.txt');
const options = {
    encoding: 'UTF-8'
};
const handler = function (err, data) {
    if (err) throw err;
    console.log(data);
};
console.log('start')
fs.readFile(filePath, options, handler);

//inline hander
fs.readFile(filePath, options, (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log('end');