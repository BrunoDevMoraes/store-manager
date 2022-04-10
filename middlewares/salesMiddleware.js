const { ProductIdVerification, quantityVerification } = require('../helpers/salesHelpers');

const checkSaleBody = (req, res, next) => {
  const { productId, quantity } = req.body;
  const productIdStatus = ProductIdVerification(productId);
  const quantityStatus = quantityVerification(quantity);
  if (productIdStatus !== true) {
    return res.status(productIdStatus.status).json({ message: productIdStatus.message });
  }
  if (quantityStatus !== true) {
    return res.status(quantityStatus.status).json({ message: quantityStatus.message });
  }
  next();
};

module.exports = {
  checkSaleBody,
};