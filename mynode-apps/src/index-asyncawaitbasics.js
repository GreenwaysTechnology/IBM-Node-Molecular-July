/**
 * async function
 *   -it is normal function only , returns promise.resolve by default
 */

// function getData(){
//     return Promise.resolve('Hello');
// }
//async function
async function getData() {
    return 'Hello'; //Promise.resolve('Hello');
}
getData().then(data => console.log(data));

//resolve,reject
async function getDataWithLogic() {
    let user = {
        id: 1,
        name: 'admin'
    }
    if (user) {
        return user;
    } else {
        Promise.reject({ code: 500, message: 'User not found!' })
    }
}
getDataWithLogic()
    .then(data => console.log(data))
    .catch(err => console.log(err))
/////////////////////////////////////////////////////////////////////////////////
//callee
const getUser = () => {
    return new Promise((resolve, reject) => {
        let user = null;
        let err = {
            code: 500,
            message: 'User not Found!!'
        }

        if (user) {
            setTimeout(resolve, 1000, user);
        } else {
            setTimeout(reject, 1000, err);
        }
    })

};

//caller
async function caller() {
    // getUser()
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
    try {
        let user = await getUser();
        console.log(user);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('done!!');
    }
}
caller()

