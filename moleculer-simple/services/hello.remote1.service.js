const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
        transporter: "nats://localhost:4222",
        nodeID: "ibm-server-1",
        registry: {
            strategy: "random"
        }
});

broker.createService({
    name: 'hellocaller',
    actions: {
        async sayHello(ctx) {
              return await ctx.call('hellocallee.sayHello',ctx.params);
        }
    }
});


//start process: broker-Runtime
async function start() {
    try {
        await broker.start();
        //call method takes two parameters -name of the service,params would be object
        let input = { name: 'Subramanian', message: 'Hello' };
        let helloMessage = await broker.call('hellocaller.sayHello', input);
        console.log(`${helloMessage}`);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('done!!!')
    }
}
start();
broker.repl();