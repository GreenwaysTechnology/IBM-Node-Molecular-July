//Language fundamentals
//advanced booleans.
/**
 * in java script everything is true execept the following values
 * //falsy values
 * 1.boolean false
 * 2.0
 * 3."",'' empty string
 * 4.NaN 
 * 5.null
 * 6.undefined
 *
 * control statements && loops
 *  -if
 *  -switch..
 *  - for,while,do..while
 * operators : 
 *   1. ==,=== !=,!==
 *   2. ||  , &&
 *   3. typeof, new,instanceof....
 *   4.tenary operator :?
 * 
 */

let isActive = true;
if (isActive) {
    console.log('Active')
} else {
    console.log('Not active')
}
//using tenary
isActive ? console.log('Active') : console.log('Not active');

let start = 0;
if (start) {
    console.log('start')
} else {
    console.log('Not start')
}

//equal
// == , ===
//== compares only value not type; it is bug
// === compares type + value : it is recommended
let x = "10";
let y = 10;
x == y ? console.log('EQUAL') : console.log('NOT EQUAL');
x === y ? console.log('EQUAL') : console.log('NOT EQUAL');

// ||

let isCold = true;
let haveHeat = true;

isCold || haveHeat ? console.log('infected by COVID-19') : console.log('You are fine')

/**
 * if first operand(counter)  is truthy, the result would be first operand else 
 * second operand 
 */

let counter = 10;
let totalCounter = counter || 1;
console.log(`Total Counter ${totalCounter}`);
