const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "nats://localhost:4222",
   // nodeID: "ibm-server-2",
    registry: {
        strategy: "random"
    }
});

broker.createService({
    name: 'hellocallee',
    actions: {
        async sayHello(ctx) {
            const { name, message } = ctx.params;
            return `${broker.nodeID}  :  ${name} ${message};`
        }
    }
});

broker.start();
broker.repl();