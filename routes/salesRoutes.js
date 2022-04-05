const express = require('express');
const salesController = require('../controllers/salesController');

const routes = express.Router();

routes.get('/:id', salesController.getById);
routes.get('/', salesController.getAll);

routes.put('/:id', salesController.updateSale);

module.exports = routes;