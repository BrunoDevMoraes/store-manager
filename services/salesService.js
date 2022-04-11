const salesModel = require('../models/salesModel');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return sales;
};

const getById = async (id) => {
  const sales = await salesModel.getById(id);
  if (sales.length === 0) return false;
  return sales;
};

const addSale = async (arr) => {
  const sales = await salesModel.addSale(arr);
  return sales;
};

const updateSale = async (id, sales) => {
  const returnedObj = {
    saleId: id,
    itemUpdated: [],
  };
  console.log(sales);
  await Promise.all(sales.map(async (_product, index) => {
    const answer = await salesModel.updateSale(id, sales[index].productId, sales[index].quantity);
    returnedObj.itemUpdated[index] = answer;
  }));
  return returnedObj;
};

module.exports = {
  getAll,
  getById,
  updateSale,
  addSale,
};
