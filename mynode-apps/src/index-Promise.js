

//Promise implementation:
/**
 * 1.Promise is object is created in two ways
 *  -factory methods
 *     resolve
 *     reject
 *  -constructors
 *    new Promise()
 * Promise by default is async, it uses setTimeout with 0ms
 */

//callback 
// function delay(handler) {
//     let fakeData = "Hello!How areyou"
//     //timer logic
//     setTimeout(handler, 5000, fakeData);
// }

// console.log('start')
// delay(function (data) {
//     console.log(`${data}`)
// });
// console.log('stop');

function delay() {
    let fakeData = "Hello Promise";
    //return promise only
    //  setTimeout(handler, 0, fakeData);
    return Promise.resolve(fakeData); //new Promise Object with success 
}

console.log('start')
delay().then(data => console.log(data));
console.log('stop');


function delayWithError() {
    let fakerError = "boom!!";
    //return promise only
    //  setTimeout(handler, 0, fakeData);
    return Promise.reject(fakerError); //new Promise Object with Error 
}
delayWithError().catch(err => console.log(err));

//with biz logic  , resolve and reject

function delayWithBiz() {
    let user = {
        id: 1,
        name: 'admin'
    };
    let error = {
        code: 500,
        message: 'boom!! No User found'
    }
    if (user) {
        return Promise.resolve(user)
    }
    return Promise.reject(error);
}
delayWithBiz()
    .then(user => console.log(user))
    .catch(err => console.log(err))
    .finally(() => console.log('done!!!!'))
////////////////////////////////////////////////////////////////////////////////////
//Promise Constructor pattern

function getPromiseWithMoreDelay() {

    return new Promise((resolve, reject) => {
        let user = {
            id: 1,
            name: 'admin'
        };
        let error = {
            code: 500,
            message: 'boom!! No User found'
        }
        if (user) {
            setTimeout(resolve, 5000, user);
        } else {
            setTimeout(reject, 5000, error);

        }

    });
}

getPromiseWithMoreDelay()
    .then(user => console.log(user))
    .catch(err => console.log(err))
    .finally(() => console.log('done!!!!'))









