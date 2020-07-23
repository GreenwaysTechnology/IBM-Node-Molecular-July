const { ServiceBroker } = require('moleculer')

//create ServiceBroker object
const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello Molecular!'
        }
    }
});

//broker will be started in repl(Read Evaulate Print Loop)
broker.start();
broker.repl(); 


