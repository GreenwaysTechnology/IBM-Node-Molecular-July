//let result = require('./mylib');

const { firstName, lastName, id, isActive,checkStatus } = require('./lib/mylib');
//console.log(result.firstName,result.lastName);

console.log(`${id} ${firstName} ${lastName}  ${isActive} `);
console.log(`${checkStatus()}`)