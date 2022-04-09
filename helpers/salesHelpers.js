const ProductIdVerification = (productId) => {
  if (!productId) return { status: 400, message: '"productId" is required' };
  return true;
};

const quantityVerification = (quantity) => {
  if (!quantity && quantity !== 0) return { status: 400, message: '"quantity" is required' };
  if (quantity <= 0) {
    return { status: 422, message: '"quantity" must be greater than or equal to 1' };
  }
  return true;
};

module.exports = {
  ProductIdVerification,
  quantityVerification,
};