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
    return res.status(200).json(sales);
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

const updateSale = async (req, res) => {
  const [{ productId, quantity }] = req.body;
  const { id } = req.params;
  try {
    const sales = await salesService.updateSale(id, productId, quantity);
    return res.status(200).json(sales);
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  updateSale,
};