
//sharing code via exports
/**
 * 
 function require(fileName){
   let exports={};
   //augmentation
   exports.firstName ='Subramanian'
   exports.firstName = 'Subramanian'
  exports.lastName = 'Murugan';
  exports.id = 1;
  exports.isActive = true;
exports.checkStatus = function () {
    return 'Available'
}
exports.address = {
    city: 'Coimbatore'
}
exports.skills = ['java', 'javascript'];
   return exports ;          

 }

let result= require('./mylib')
 */
let a =10;

exports.firstName = 'Subramanian'
exports.lastName = 'Murugan';
exports.id = 1;
exports.isActive = true;
exports.checkStatus = function () {
    return 'Available'
}
exports.address = {
    city: 'Coimbatore'
}
exports.skills = ['java', 'javascript'];