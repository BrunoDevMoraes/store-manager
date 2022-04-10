const salesService = require('../services/salesService');

const getAll = async (_req, res) => {
  try {
    const sales = await salesService.getAll();
    return res.status(200).json(sales);
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const sales = await salesService.getById(id);
    if (sales === false) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(sales);
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

const addSale = async (req, res) => {
  const productsArr = req.body;
  try {
    const sales = await salesService.addSale(productsArr);
    return res.status(201).json(sales);
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

const updateSale = async (_req, _res) => {
  // const sales = req.body;
  // const { id } = req.params;
  // console.log(sales[0].productId, sales[0].quantity, id);
  // try {
  //   const sales = await salesService.updateSale(id, productId, quantity);
  //   return res.status(200).json(sales);
  // } catch (err) {
  //     return res.status(500).send({ message: err.message });
  // }
};

module.exports = {
  getAll,
  getById,
  updateSale,
  addSale,
};