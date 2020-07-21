
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
            setTimeout(resolve, 1000, user);
        } else {
            setTimeout(reject, 1000, err);
        }
    })

};

const login = user => {
    //biz logic
    return new Promise((resolve, reject) => {
        const SUCCESS = 'Login success';
        const FAILURE = 'Login Failed';
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, SUCCESS)
        } else {
            setTimeout(reject, 1000, FAILURE);
        }
    })

};
// getUser()
//     .then(user => login(user))
//     .then(status => console.log(status))
//     .catch(err => console.log(err))
//     .finally(() => console.log('done!!'))

async function start() {
    try {
        let user = await getUser();
        let success = await login(user);
        console.log(success);
    } catch (err) {
        console.log(err)
    }
    finally {
        console.log('done');
    }
}
start();