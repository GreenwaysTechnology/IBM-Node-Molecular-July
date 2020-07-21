/**
 * Async programming :
 *  timer api
 *    -setTimeout
 *       -if you want to schedule any task in delayed manner using cpu timer.
 *        once timeout is completed, handler function will be ready to handle result
 */

function delay(handler) {
    let fakeData = "Hello!How areyou"
    //timer logic
    setTimeout(handler, 5000, fakeData);
}

console.log('start')
delay(function (data) {
    console.log(`${data}`)
});
console.log('stop');

//arrow version

const { log } = console;
const sleep = callback => {
    let fakeData = 'Awaken!!'
    setTimeout(callback, 6000, fakeData);
};
sleep(data => console.log(data));
//with object destrucing
sleep(log);





