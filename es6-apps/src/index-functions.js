/**
 * Functional programming
 *  -how to declare functions 
 *     -definition pattern
 *     -literal pattern
 *     -anonmous functions
 *  -es 5 functions
 * -es 6 functions - arrow functions
 *  
 * -function declartion properties
 *    - params and args
 *    -return values
 * Note ; function can take any litreal as parameter and return any thing
 *     -take any value including function.
 */

//definition pattern : function declaration
function sayHello() {
    console.log("hello")
}
//function call
sayHello();
//paramaters and args
//a,b are args
//default args : es 6 feature
function add(a = 1, b = 1) {
    let c = a + b;
    console.log(`Add Result  ${c}`)
}
//10,10 are parameters
add(10, 10)
//undefined , undefined
add();
//return values
function substract(a = 1, b = 1) {
    let c = a - b;
    return c;
}
console.log(`Result Substract ${substract(10, 2)}`)
console.log(`Result Substract ${substract()}`);
//*************************************************************************************
//syntax 2 : literal pattern
/**
 * let a =10;
 *  10 literal number
 * function is literal(value),
 *  1. can be assigned to a variable
 *  2. can be passed as parameter to another function
 *  3. can be returned from another function
 *  
 * once a function assinged,passed, returned , can invoked like normal function. 
 * 
 * types:
 *   1.named function
 *   2.anonmous function /nameless function
 * 
  */

// *  1. can be assigned to a variable
//  *   1.named function

let greeter = function sayGreeter() {
    console.log('Say Greeter');
};
//call a function using a variable
greeter();
//2.anonmous function /nameless function
let hai = function () {
    console.log('Say Hai');
};
hai();
//parameters and args , returns
let multiply = function (a = 1, b = 1) {
    return a * b;
};
console.log(multiply(10, 2));
//////////////////////////////////////////////////////////////////////////////////
//how to pass function as parameter

//start is just variable
/**
 * 
 * @param {*} start 
 * start= function () {
    //function body
    console.log('Starting......')
}
 */
function connect(start) {
    //call the function
    let status = start('HttpServer');
    status ? console.log('Server is Ready to Accept Requests') : console.log('Server is Failed!')
}
//passing anonmous function
connect(function (param) {
    //function body
    console.log(`${param} Starting......`)
    return true;
});

//
let connector = function (start) {
    //call the function
    let status = start('TCP Server');
    status ? console.log('Server is Ready to Accept Requests') : console.log('Server is Failed!')
};
connector(function (param) {
    //function body
    console.log(`${param} Starting......`)
    return true;
});
/////////////////////////////////////////////////////////////////////////////////
//Returnning function from another

// function counter() {
//     function inc() {
//         console.log('inc')
//     }
//     //
//     inc();
// }
// function counter() {
//     return function inc() {
//         console.log('inc')
//     };
// }
function counter() {
    return function () {
         console.log('inc');
    };
}
let increment = counter();
increment();
//short cut
counter()();