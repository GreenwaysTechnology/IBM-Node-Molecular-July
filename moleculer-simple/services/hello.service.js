/**
 * Greeter Service 
 * 
 * ServiceBroker represents Moleculer Runtime.
 */
//Get The ServiceBroker class
const { ServiceBroker } = require('moleculer')

//create ServiceBroker object
const broker = new ServiceBroker();

//service   creation : broker.createService(serviceSchema)
//serviceschema is object which defines properties and methods of service.
broker.createService({
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello Molecular!'
        }
    }
});

broker.createService({
    name: 'hai',
    actions: {
        sayHai() {
            return 'Hai Molecular!'
        }
    }
});

async function start() {
    try {
        await broker.start();
        let helloMessage = await broker.call('hello.sayHello');
        let haiMessage = await broker.call('hai.sayHai')
        console.log(`Hello ${helloMessage} Hai ${haiMessage}`);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('done!!!')
    }
}
start();