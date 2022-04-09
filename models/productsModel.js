const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products;');
  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [products] = await connection.execute(query, [id]);
  return products[0];
};

const addProduct = async (name, quantity) => {
  const products = await getAll();
  const id = products.length + 1;
  const query2 = 'INSERT INTO StoreManager.products (id, name, quantity) VALUES (?, ?, ?)';
  await connection.execute(query2, [id, name, quantity]);
  return { id, name, quantity };
};

const checkProduct = async (name) => {
  const query = 'SELECT * FROM StoreManager.products WHERE name = ?';
  const [product] = await connection.execute(query, [name]);
  return product;
};

const updateProduct = async (id, name, quantity) => {
  const oldProduct = await getById(id);
  if (oldProduct.lenght === 0) return false;
  const wantedId = oldProduct[0].id;
  const query2 = 'UPDATE StoreManager.products SET id = ?, name = ?, quantity = ? WHERE id = ?';
  await connection.execute(query2, [wantedId, name, quantity, wantedId]);
  return { id: wantedId, name, quantity };
};

const deleteProduct = async (id) => {
  const oldProduct = await getById(id);
  if (oldProduct.lenght === 0) return false;
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  await connection.execute(query, [id]);
  return true;
};

module.exports = {
    getAll,
    getById,
    addProduct,
    updateProduct,
    deleteProduct,
    checkProduct,
};