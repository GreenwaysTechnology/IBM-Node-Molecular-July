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


//start process: broker-Runtime
broker.start()
    .then(res => {
        //any code , after broker ready
        console.log('broker is ready now , do something, interact with service')
        //call service methods and get result
        broker.call('hello.sayHello')
            .then(message => { console.log(message) })
            .catch(err => console.log('Service error ', err));
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log('Service broker has done')
    })