const express = require('express');
const salesController = require('../controllers/salesController');
const { checkSaleBody } = require('../middlewares/salesMiddleware');

const routes = express.Router();

routes.get('/:id', salesController.getById);
routes.get('/', salesController.getAll);

routes.post('/', checkSaleBody, salesController.addSale);

routes.put('/:id', checkSaleBody, salesController.updateSale);

module.exports = routes;