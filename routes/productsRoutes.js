const express = require('express');
const productsController = require('../controllers/productsController');
const { checkProductBody } = require('../middlewares/productsMiddleware');

const routes = express.Router();

routes.get('/:id', productsController.getById);
routes.get('/', productsController.getAll);

routes.post('/', checkProductBody, productsController.addProduct);

routes.put('/:id', checkProductBody, productsController.updateProduct);

routes.delete('/:id', productsController.deleteProduct);

module.exports = routes;