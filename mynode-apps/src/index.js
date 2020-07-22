const util = require('lodash/array');

//start using lodash
const array = [1];
const other = util.concat(array, 2, [3], [[4]]);
console.log(other);