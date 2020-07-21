//callback nesting

/**
 * how to pass two callbacks, 
 *  -one is going to handle - success -resolve
 *  -another one is going to handler - failure-reject
 */
const { log } = console;

const getUser = (resolve, reject) => {
    //biz logic to simulate success and failure
    let user = {
        id: 1,
        name: 'admin'
    };
    let err = {
        code: 500,
        message: 'User not Found!!'
    }

    if (user) {
        setTimeout(resolve, 1000, user);
    } else {
        setTimeout(reject, 1000, err);
    }

};

//login method takes 3 args -  user,resolve,reject

const login = (user, resolve, reject) => {
    //biz logic
    const SUCCESS = 'Login success';
    const FAILURE = 'Login Failed';
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, SUCCESS)
    } else {
        setTimeout(reject, 1000, FAILURE);
    }

};


// getUser(user => {
//     //nesting 
//     log('User is called')
//     login(user, success => {
//         log(success);
//     }, failure => {
//         log(failure);
//     });
// }, err => {
//     log(err);
// });
getUser(user => {
    //nesting 
    log('User is called')
    login(user, log, log);
}, log);
