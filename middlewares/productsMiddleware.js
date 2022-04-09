const { nameVerification, quantityVerification } = require('../helpers/productsHelpers');

const checkProductBody = (req, res, next) => {
  const { name, quantity } = req.body;
  const nameStatus = nameVerification(name);
  const quantityStatus = quantityVerification(quantity);
  if (nameStatus !== true) {
    return res.status(nameStatus.status).json({ message: nameStatus.message });
  }
  if (quantityStatus !== true) {
    return res.status(quantityStatus.status).json({ message: quantityStatus.message });
  }
  next();
};

module.exports = {
  checkProductBody,
};