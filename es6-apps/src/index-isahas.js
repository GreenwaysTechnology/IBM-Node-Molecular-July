

//es 6 class inheritance

class Account {
    constructor() {
        console.log('Account')
    }
    withdraw() {
        return 10;
    }
}
class Customer {
    constructor() {
        console.log('Customer class')
    }
}
//is-a -inheritaance
class SavingsAccount extends Account {
    customer;
    constructor(customer = new Customer()) {
        super();
        //has-a 
        this.customer = customer;
        console.log('Savings Account')
    }
    withdraw() {
        return 1000 * super.withdraw();
    }

}
let sb = new SavingsAccount(new Customer());
console.log(sb.withdraw())
