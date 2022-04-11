const connection = require('./connection');

const serialize = async (array) => {
  const correctArr = array.map((product) => ({
    saleId: product.sale_id,
    date: product.date,
    productId: product.product_id,
    quantity: product.quantity,
  }));
  return correctArr;
  };

  const serializeWithoutId = async (array) => {
    const correctArr = array.map((product) => ({
      date: product.date,
      productId: product.product_id,
      quantity: product.quantity,
    }));
    return correctArr;
    };

const getAll = async () => {
  const [sales] = await connection.execute(`SELECT sale_id,  date, product_id, quantity
  FROM sales_products
  INNER JOIN sales
  ON sales_products.sale_id = sales.id`);
  return serialize(sales);
};

const getById = async (id) => {
  const query = `SELECT date, product_id, quantity
  FROM sales_products INNER JOIN sales
  ON sales_products.sale_id = sales.id
  WHERE sale_id = ?`;
  const [sale] = await connection.execute(query, [id]);
  return serializeWithoutId(sale);
};

const updateSale = async (id, productId, quantity) => {
  const query = `UPDATE sales_products
  SET quantity = ?
  WHERE sale_id = ? AND product_id = ?`;
  await connection.execute(query, [quantity, id, productId]);
  return ({ productId, quantity });
};

const addSale = async (arr) => {
  const query1 = 'INSERT INTO sales (date) VALUES (NOW())';
  const [{ insertId }] = await connection.execute(query1);
  const query2 = `INSERT INTO sales_products (sale_id, product_id, quantity)
  VALUES (?, ?, ?)`;
  const answerObj = {
    id: insertId,
    itemsSold: [],
  };
  console.log(arr);
  await Promise.all(arr.map(async (product) => {
    await connection.execute(query2, [insertId, product.productId, product.quantity]);
    answerObj.itemsSold.push({ productId: product.productId, quantity: product.quantity });
  }));
  return answerObj;
};

module.exports = {
    getAll,
    getById,
    addSale,
    updateSale,
};