//Language fundamentals
/**
 * js is dynamic typed language : no type is required to declare variables.
 * types are identified during runtime only.
 * types :
 *  -string - 16 bit unicode character
 *  -number - size 64 bit - double
 *  -boolean - size 1 bit
 *  -undefined
 *  -function
 *  -object
 * values : iterals 
 *  based on literal only type is identified
 *  -string
 *  -number
 *  -boolean
 *  -undefined
 *  -NaN - number : Not a Number : runtime numerical errors
 *  -infinity : number : div/0
 *  -function
 *  -null - object
 *  -object
 * variable declaration 
 *   -var  - old way - es5 style
 *   -let  -es 6
 *   -const - es 6
 *            -----local variables
 *   -this - old way  - instance variables
 * 
 *   
 * 
 */

 //variable declaration 
 //strings :  '',""(es 5) ``(back tick-es 6)
 var firstName='Subramanian'
 //string concatnation : + , `${variableName}`(template literal syntax)
 console.log("FirstName " + firstName);
 console.log("FirstName " , firstName);
 console.log(`FirstName ${firstName}`);
 //multi line 
 var doc="<html>"+
         "<body>" +
         "<body>";

console.log(doc);
var title = 'IBM Digital'
var htmlDoc = `
           <html>
              <head>
              <title>${title}</title>
           <body>
              <h1>Hello </h1>
           </body>
           </html>
  `
console.log(htmlDoc);

let lastName = 'Murugan';
console.log(`Last Name ${lastName}`);
//undefined
let salary;
console.log(`Salary ${salary}`)
//numbers :64 aka double
let cost =1000;
console.log(`Cost ${cost}`);

//Not a Number: it is runtime exeception : number which identifies error code
let totalCost = salary * cost;
console.log(`Total Cost ${totalCost}`); //nan : bug

//inifnity : div/0
let avgCost  =  cost /0;
console.log(`Avg ${avgCost}`); //inifnity

//booleans
let isActive = true; // true /false
console.log(`Is Active ${isActive}`);

//to know the runtime type of variable : // typeof 
console.log(typeof firstName) // string
console.log(typeof salary) //undefined
console.log(typeof cost) //number
console.log(typeof avgCost); //number
console.log(typeof isActive); // boolean