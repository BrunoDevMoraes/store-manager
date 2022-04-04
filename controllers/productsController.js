const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  try {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await productsService.getById(id);
    return res.status(200).json(products);
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

const addProduct = async (req, res) => {
  const { name, quantity } = req.body;
  try {
    const product = await productsService.addProduct(name, quantity);
    if (product === false) return res.status(409).json({ message: 'Product already exists' });
    return res.status(200).json(product);
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  const { name, quantity } = req.body;
  try {
    const product = await productsService.updateProduct(name, quantity);
    if (product === false) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(product);
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  addProduct,
  updateProduct,
};
