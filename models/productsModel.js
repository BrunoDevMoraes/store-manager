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

const addProduct = async (name, quantity) => {
  const query = 'SELECT * FROM StoreManager.products WHERE name = ?';
  const [product] = await connection.execute(query, [name]);
  console.log(product);
  if (product.lenght > 0) return false;
  const products = await getAll();
  const id = products.length + 1;
  const query2 = 'INSERT INTO StoreManager.products (id, name, quantity) VALUES (?, ?, ?)';
  const [newProduct] = await connection.execute(query2, [id, name, quantity]);
  return newProduct;
};

module.exports = {
    getAll,
    getById,
    addProduct,
};