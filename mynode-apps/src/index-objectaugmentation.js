//Object augmentation:
//object memory layout
/**
 * object is memory having key : value pair structure : hash table/ dictionary
 *  yes every object in js is simple dictionary/map
 * note: since object is map, you can perform curd operation on object.
 *  -add,delete,update,iterate,search
 *      - Object augmentation
 */


let emp = {
    id: 1
};
 //here only 1 property has been declared
console.log(emp.id)
//add operations
emp.firstName = 'Subramanian' //setter
console.log(emp.firstName) //getter

//update : if prop exits, then update, else add
emp.firstName = 'John'
console.log(emp.firstName) //getter

emp.salary =9000;
console.log(emp.salary) //getter

//delete
delete emp.salary;
console.log(emp.salary) //getter

//iteration
for (const key in emp) {
  console.log(key,emp[key])
}

