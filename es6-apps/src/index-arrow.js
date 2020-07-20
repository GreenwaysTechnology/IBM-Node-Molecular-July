//es 6 function literal ; arrow function

/**
 * why arrow
 *  1.syntax simple
 */
//old way
let hai = function () {
    console.log('Hai');
};
hai();
let hi = () => {
    console.log('Hai');
};
hi();
//flavours of arrows
//1. if function has single line of body, remove {}
let newHai = () => console.log('Hai');
newHai();

//2.with args and parameters : multi parameters with default args
let add = (a = 1, b = 2) => {
    let result = a + b;
    console.log(`Result is ${result}`);
}
add(10, 10);
//2.with args and parameters : single parameters without  default args :drop ()
let stock = value => console.log(`Value ${value}`);
stock(100);

//3 return values : with body
let substract = (a = 1, b = 2) => {
    let result = a - b;
    return `Result is ${result}`;
};
console.log(`Result is ${substract(12, 89)}`);

//4.only return , no body , drop {} and return statement
let getValue = () => 10;
console.log(getValue())
//get value ,no default args, return the same 
let setAndGetValue = value => value;
console.log(setAndGetValue(100));
//************************
//function as parameter
let connect = start => start('HTTP SERVER');
connect(param => console.log(`${param} is starting....`));

//return function as parameter
let counter = function (param1) {
    return function (param2) {
        console.log('inc');
    }
};
let co = param1 => param2 => console.log(`${param1} ${param2}`);
co('param1')('param2')

//let counter = () => () => console.log('inc')
counter()()








