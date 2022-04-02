const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
      'SELECT * FROM StoreManager.products;',
  );
  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [products] = await connection.execute(query, [id]);
  return products;
};

module.exports = {
    getAll,
    getById,
};