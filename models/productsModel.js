const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products;');
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
  if (product.lenght > 0) return false;
  const products = await getAll();
  const id = products.length + 1;
  const query2 = 'INSERT INTO StoreManager.products (id, name, quantity) VALUES (?, ?, ?)';
  await connection.execute(query2, [id, name, quantity]);
  return { id, name, quantity };
};

const updateProduct = async (name, quantity) => {
  const query = 'SELECT * FROM StoreManager.products WHERE name = ?';
  const [oldProduct] = await connection.execute(query, [name]);
  if (oldProduct.lenght === 0) return false;
  const wantedId = oldProduct[0].id;
  const query2 = 'UPDATE StoreManager.products SET id = ?, name = ?, quantity = ? WHERE id = ?';
  await connection.execute(query2, [wantedId, name, quantity, wantedId]);
  return { wantedId, name, quantity };
};

module.exports = {
    getAll,
    getById,
    addProduct,
    updateProduct,
};