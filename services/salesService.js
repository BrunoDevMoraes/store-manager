const salesModel = require('../models/salesModel');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return sales;
};

const getById = async (id) => {
  const sales = await salesModel.getById(id);
  return sales;
};

const updateSale = async (id, productId, quantity) => {
  const sales = await salesModel.updateSale(id, productId, quantity);
  return sales;
};

module.exports = {
  getAll,
  getById,
  updateSale,
};
