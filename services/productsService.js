const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const products = await productsModel.getAll(id);
  return products;
};

const addProduct = async (name, quantity) => {
  const product = await productsModel.addProduct(name, quantity);
  if (product === false) return false;
  return product;
};

const updateProduct = async (name, quantity) => {
  const product = await productsModel.updateProduct(name, quantity);
  if (product === false) return false;
  return product;
};

module.exports = {
  getAll,
  getById,
  addProduct,
  updateProduct,
};
