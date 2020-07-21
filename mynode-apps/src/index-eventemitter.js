//Event driven programming ; using events module

const EventEmitter = require('events');

//Create Event object
const events = new EventEmitter();

//subscriber
events.on('hello', data => {
    console.log(data);
});

//publisher
function producer() {
    //emit /send event to subscribers
    events.emit('hello', 'Hello!!!');
}
producer();
//////////////////////////////////////////////////////////////////////////////

//domain class
class OrderService extends EventEmitter {
    constructor() {
        super();
        this.on('orderCreated', order => console.log(order))
    }
    //methods
    sale(order) {
        //when ever sale is called
        this.emit('orderCreated', order);
    }
}

let orderService = new OrderService();

setTimeout(() => {
    orderService.sale({ id: 1, produt: 'A', price: 9000 });
}, 1000)








