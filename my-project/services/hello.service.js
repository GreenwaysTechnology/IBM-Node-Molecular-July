module.exports = {
    name: 'hello',
    actions: {
        sayHello: {
            handler(ctx) {
                return 'Hello from back end service!!!';
            }
        }
    }

}