const { ProductIdVerification, quantityVerification } = require('../helpers/salesHelpers');

const checkSaleBody = (req, res, next) => {
  const array = req.body;
  for (let index = 0; index < array.length; index += 1) {
    const product = array[index];
    const productIdStatus = ProductIdVerification(product.productId);
    const quantityStatus = quantityVerification(product.quantity);
    if (productIdStatus !== true) {
      return res.status(productIdStatus.status).json({ message: productIdStatus.message });
    }
    if (quantityStatus !== true) {
      return res.status(quantityStatus.status).json({ message: quantityStatus.message });
    }
  }
  next();
};

module.exports = {
  checkSaleBody,
};