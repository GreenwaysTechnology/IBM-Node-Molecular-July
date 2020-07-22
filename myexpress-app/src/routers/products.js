
const express = require('express');
const { response } = require('express');
const { findAll } = require('../services/ProductService');

const productRouter = express.Router();

productRouter.get('/list', async (request, response) => {
    let products = await findAll();
    response.json(products);
});

module.exports = productRouter;