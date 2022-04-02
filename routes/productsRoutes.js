const express = require('express');
const productsController = require('../controllers/productsController');

const routes = express.Router();

routes.get('/:id', productsController.getById);
routes.get('/', productsController.getAll);

module.exports = routes;