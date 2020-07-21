//how to refactor callback nesting using promise; how to avoid callback hell.

const { log } = console;

const getUser = () => {
    return new Promise((resolve, reject) => {
        let user = {
            id: 1,
            name: 'admin'
        };
        let err = {
            code: 500,
            message: 'User not Found!!'
        }

        if (user) {
            setTimeout(resolve, 5000, user);
        } else {
            setTimeout(reject, 1000, err);
        }
    })

};

//login method takes 3 args -  user

const login = user => {
    //biz logic
    return new Promise((resolve, reject) => {
        const SUCCESS = 'Login success';
        const FAILURE = 'Login Failed';
        if (user.name === 'admin') {
            setTimeout(resolve, 6000, SUCCESS)
        } else {
            setTimeout(reject, 1000, FAILURE);
        }
    })

};

//callback hell
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

//callback hell solution : promise
//way -1

// getUser()
//     .then(user => {
//         login(user)
//             .then(status => {
//                 console.log(status);
//             })
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log('done!!'))

// //way 2
// getUser()
//     .then(user => {
//         return login(user)
//     })
//     .then(status => console.log(status))
//     .catch(err => console.log(err))
//     .finally(() => console.log('done!!'))

// //way 2.1
// getUser()
//     .then(user => login(user))
//     .then(status => console.log(status))
//     .catch(err => console.log(err))
//     .finally(() => console.log('done!!'))
// //way 2.2
getUser()
    .then(user => {
        console.log('getuser')
        return login(user)
    })
    .then(log)
    .catch(log)
    .finally(() => console.log('done!!'))

// getUser(user => {
//     //nesting 
//     log('User is called')
//     login(user, log, log);
// }, log);
