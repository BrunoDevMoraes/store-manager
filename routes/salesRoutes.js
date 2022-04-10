const express = require('express');
const salesController = require('../controllers/salesController');
const { checkSaleBody } = require('../middlewares/salesMiddleware');

const routes = express.Router();

routes.get('/:id', salesController.getById);
routes.get('/', salesController.getAll);

routes.post('/', salesController.addSale);

routes.put('/:id', salesController.updateSale);

module.exports = routes;