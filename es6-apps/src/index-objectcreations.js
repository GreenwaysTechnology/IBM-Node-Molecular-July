//How to create object?
/**
 * 1.constructor pattern
 *    es 5 functions as class
 *    es 6 classes
 * 2.literal pattern
 *   
 */

function Employee(id = 1, name = 'default') {
    //state, behaviour
    this.id = id; //1;
    this.name = name;//'Subramanian';
    //mehtods
    this.calculate = function () {
        return 1000;
    }

}
//emp is reference variable , new is keyword to create  object , 
//Employee() constructor call.
let emp = new Employee(12, 'Subramanian');
//emp.id = 9000;
console.log(`${emp.id} ${emp.name} ${emp.calculate()}`)


class Customer {
    //state, behaviour
    id = 1;
    name = 'Subramanian';
    constructor(id = 1, name = 'Subramanian') {
        this.id = id;
        this.name = name;
    }
    //mehtods
    // calculate = function () {
    //     return 1000;
    // }
    calculate() {
        return 1000;
    }

}
let cust = new Customer(23, 'Ram');
cust.id = 8888;
console.log(`${cust.id} ${cust.name} ${cust.calculate()}`)

//literal pattern : no class,function

let order = {
    id: 1,
    name: 'Computers',
    qty: 100,
    price: 100,
    inStock: true,
    calculate: function () {
        return this.qty * this.price
    },
    //arrow
    calculateCost: () => {
        //kindly refer this keyword inside arrow : this keyword inside is different 
        //meaning
        return order.qty * order.price
    },
    // es 6 class pattern
    calculateNewCost() {
        return this.qty * this.qty;
    }

}
console.log(order.calculate(), order.calculateCost(), order.calculateNewCost())













