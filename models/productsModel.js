const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products;');
  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  const [products] = await connection.execute(query, [id]);
  return products[0];
};

const addProduct = async (name, quantity) => {
  const query2 = 'INSERT INTO products ( name, quantity) VALUES (?, ?, ?)';
  const result = await connection.execute(query2, [name, quantity]);
  return { id: result[0].insertId, name, quantity };
};

const checkProduct = async (name) => {
  const query = 'SELECT * FROM products WHERE name = ?';
  const [product] = await connection.execute(query, [name]);
  return product;
};

const updateProduct = async (id, name, quantity) => {
  const oldProduct = await getById(id);
  if (!oldProduct) return false;
  const wantedId = oldProduct.id;
  const query2 = 'UPDATE products SET id = ?, name = ?, quantity = ? WHERE id = ?';
  await connection.execute(query2, [wantedId, name, quantity, wantedId]);
  return { id: wantedId, name, quantity };
};

const deleteProduct = async (id) => {
  const oldProduct = await getById(id);
  if (!oldProduct) return false;
  const query = 'DELETE FROM products WHERE id = ?';
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