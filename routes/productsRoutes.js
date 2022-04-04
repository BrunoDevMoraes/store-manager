const express = require('express');
const productsController = require('../controllers/productsController');

const routes = express.Router();

routes.get('/:id', productsController.getById);
routes.get('/', productsController.getAll);

routes.post('/', productsController.addProduct);

routes.put('/:id', productsController.updateProduct);

module.exports = routes;