const db = require('../connection');

class ProductService {
    constructor() {
    }
    findAll() {
        return new Promise((resolve, reject) => {
            const products = db.collection('products');
            //query monogodb
            products.find((err, docs) => {
                if (err) {
                    reject(err)
                }
                resolve(docs);
            })
        });
    }
}

//export object
module.exports = new ProductService();