
//object destructuring:

//without destructring
function display(employee) {
    //log all details
    console.log(`Id ${employee.id}`)
    console.log(`Name ${employee.name}`)
    console.log(`City ${employee.city}`)
    console.log(`State ${employee.state}`)
}
function display1(employee) {
    //extract object properties
    const { id, name, city, state } = employee;
    //log all details
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
    console.log(`State ${state}`)

}

//extract object properties
function display2({ id, name, city, state }) {
    //log all details
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
    console.log(`State ${state}`)

}
const displayArrow = ({ id, name, city, state }) => {
    //log all details
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
    console.log(`State ${state}`)

};

display({ id: 1, name: 'Subramanian', city: 'Coimbatore', state: 'Tamil Nadu' });
display1({ id: 1, name: 'Subramanian', city: 'Coimbatore', state: 'Tamil Nadu' });
display2({ id: 1, name: 'Subramanian', city: 'Coimbatore', state: 'Tamil Nadu' });
displayArrow({ id: 1, name: 'Subramanian', city: 'Coimbatore', state: 'Tamil Nadu' });

// //
// function getStock(id = 1, symbol = 'google', price = 100) {
//     // return {
//     //     id: id,
//     //     symbol: symbol,
//     //     price: price
//     // };
//     //key:value ===same => remove one
//     return {
//         id,
//         symbol,
//         price
//     };
// }
// //
// const getStock=(id = 1, symbol = 'google', price = 100) => {
//     return {
//         id,
//         symbol,
//         price
//     };
// };

const getStock = (id = 1, symbol = 'google', price = 100) => ({
    id,
    symbol,
    price
});

console.log(getStock())