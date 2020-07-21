const fs = require('fs');

class FileService {
    constructor() {

    }
    //callback pattern
    readFile(handler) {
        const filePath = './src/assets/info.txt';
        const options = {
            encoding: 'UTF-8'
        };
        fs.readFile(filePath, options, (err, data) => {
            if (err) throw err;
            //  console.log(data);
            handler(data);
        });
    }
    //Promise pattern
    readFilePromise() {
        return new  Promise((resolve, reject) => {
            const filePath = './src/assets/info.txt';
            const options = {
                encoding: 'UTF-8'
            };
            fs.readFile(filePath, options, (err, data) => {
                if (err) {
                    reject(err);
                }
                //  console.log(data);
                resolve(data);
            });
        });
    }
}
module.exports = FileService;