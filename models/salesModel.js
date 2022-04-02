const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
      'SELECT * FROM StoreManager.sales;',
  );
  return sales;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.sales WHERE id = ?;';
  const [sales] = await connection.execute(query, [id]);
  return sales;
};

module.exports = {
    getAll,
    getById,
};