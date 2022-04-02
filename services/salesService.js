const salesModel = require('../models/salesModel');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return sales;
};

const getById = async (id) => {
  const sales = await salesModel.getAll(id);
  return sales;
};

module.exports = {
  getAll,
  getById,
};