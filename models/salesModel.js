const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
      'SELECT * FROM StoreManager.sales;',
  );
  return sales;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.sales WHERE id = ?';
  const [sale] = await connection.execute(query, [id]);
  return sale;
};

const updateSale = async (id, productId, quantity) => {
  const query = 'UPDATE StoreManager.sales_products SET sale_id = ?, product_id = ?, quantity = ? WHERE sale_id = ?';
  await connection.execute(query, [id, productId, quantity, id]);
  return {
  saleId: id,
  itemUpdated: [
      {
        productId,
        quantity,
      },
    ],
  };
};

module.exports = {
    getAll,
    getById,
    updateSale,
};