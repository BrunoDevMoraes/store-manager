const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const products = await productsModel.getById(id);
  if (!products) return false;
  return products;
};

const addProduct = async (name, quantity) => {
  const check = await productsModel.checkProduct(name);
  const verification = check.length === 0;
  if (verification === false) return false;
  const product = await productsModel.addProduct(name, quantity);
  return product;
};

const updateProduct = async (id, name, quantity) => {
  const product = await productsModel.updateProduct(id, name, quantity);
  if (product === false) return false;
  return product;
};

const deleteProduct = async (id) => {
  const product = await productsModel.deleteProduct(id);
  if (product === false) return false;
  return true;
};

module.exports = {
  getAll,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
};
