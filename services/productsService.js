const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const products = await productsModel.getAll(id);
  return products;
};

module.exports = {
  getAll,
  getById,
};