const FileService = require('./api/FileService');


let fileService = new FileService();

async function readTextFile() {
    //read File 
    fileService.readFile(data => console.log(data));
    //promise pattern
    fileService.readFilePromise()
        .then(data => console.log(data))
        .catch(err => console.log(err))

    try {
        let data = await fileService.readFilePromise();
        console.log('Await result' + data);
    }
    catch (err) {
        console.log(err);
    }

}
readTextFile();