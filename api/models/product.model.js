const pool = require("../../config/GetConnect");

/**
 * Get product list data
 * @return {Array}
 */
const getProduct = async () => {
  const query = "select * from products";
  let rtData = [];
  try {
    rtData = await pool.executeQuery(query);
  } catch (error) {
    throw error;
  }
  return rtData;
};

/**
 * Create product
 * @param {object} product
 */
const createProduct = async (product) => {
  const query =
    "INSERT INTO `products`(name, image, description) VALUES (?,?,?)";

  let rtData = [];
  try {
    rtData = await pool.executeQuery(query, [
      product.name,
      product.image,
      product.description,
    ]);
  } catch (error) {
    throw error;
  }
  return rtData;
};

/**
 * Delete product according to productId
 * @param {int} productId
 */
const deleteProduct = async (productId) => {
  const query = "DELETE FROM products WHERE productId = ?";

  let rtData = [];
  try {
    rtData = await pool.executeQuery(query, productId);
  } catch (error) {
    throw error;
  }
  return rtData;
};

/**
 * Update info product according to productId
 * @param {object} product
 * @param {int} productId
 */
const updateProduct = async (product, productId) => {
  const query =
    "UPDATE products SET name= ?,image= ?,description= ? WHERE productId = ?";

  let rtData = [];
  try {
    rtData = await pool.executeQuery(query, [
      product.name,
      product.image,
      product.description,
      productId,
    ]);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * view detail product according productId
 * @param {int} productId
 * @return {Array}
 */
const detailProduct = async (productId) => {
  const query = "SELECT * FROM products WHERE productId = ?";

  let rtData = [];
  try {
    rtData = await pool.executeQuery(query, productId);
  } catch (error) {
    throw error;
  }

  return rtData;
};

module.exports = {
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  detailProduct,
};
