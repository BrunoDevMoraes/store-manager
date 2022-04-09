const nameVerification = (name) => {
  if (!name) return { status: 400, message: '"name" is required' };
  if (name.length < 5) {
    return { status: 422, message: '"name" length must be at least 5 characters long' };
  }
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
  nameVerification,
  quantityVerification,
};