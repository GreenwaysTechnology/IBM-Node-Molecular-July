const { ServiceBroker } = require('moleculer')


//create ServiceBroker object
const broker = new ServiceBroker();

//createService not necessary, instead of you can use 
//loadService, load service defition and create Service
broker.loadService('./services/greeter.service.js');


async function start() {
    try {
        await broker.start();
        let greeterMessage = await broker.call('greeter.sayGreet');
        console.log(`${greeterMessage}`);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('done!!!')
    }
}
start();



