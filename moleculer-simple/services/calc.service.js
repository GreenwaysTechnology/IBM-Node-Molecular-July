
const { ServiceBroker } = require('moleculer');

//create Broker 
const broker = new ServiceBroker();

//adder service : which add two number returns result

broker.createService({
    name: 'adder',
    actions: {
        add(ctx) {
            const { a, b } = ctx.params;
            return a + b;
        }
    }
})
broker.createService({
    name: 'substracter',
    actions: {
        substract(ctx) {
            const { a, b } = ctx.params;
            return a - b;
        }
    }
})

broker.createService({
    name: 'calculator',
    actions: {
        async add(ctx) {
            const { a, b } = ctx.params;
            let result = await ctx.call('adder.add', { a: a, b: b });
            console.log(result);
            return result;
        },
        async substract(ctx) {
            const { a, b } = ctx.params;
            let result = await ctx.call('substracter.substract', { a: a, b: b });
            return result;
        }
    }
})

async function start() {
    try {
        await broker.start();
        //call method takes two parameters -name of the service,params would be object
        let input = { a: 10, b: 20 };
        let addRes = await broker.call('calculator.add', input);
        let subRes = await broker.call('calculator.substract', input);
        console.log(` Addition is = ${addRes}`);
        console.log(` Substraction is = ${subRes}`);

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