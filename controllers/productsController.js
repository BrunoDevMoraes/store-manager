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
    if (products === false) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(products);
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

const addProduct = async (req, res) => {
  const object = req.body;
  try {
    const product = await productsService.addProduct(object.name, object.quantity);
    if (product === false) return res.status(409).json({ message: 'Product already exists' });
    return res.status(201).json(product);
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const object = req.body;
  try {
    const product = await productsService.updateProduct(id, object.name, object.quantity);
    if (product === false) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(product);
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productsService.deleteProduct(id);
    if (product === false) return res.status(404).json({ message: 'Product not found' });
    return res.status(204).json();
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
};
