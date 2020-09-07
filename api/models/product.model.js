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
    "INSERT INTO `products`(name, authorname, image, description, categoryId, publisherId) VALUES (?,?,?,?,?,?)";

  let rtData = [];
  try {
    rtData = await pool.executeQuery(query, [
      product.name,
      product.authorname,
      product.image,
      product.description,
      product.categoryId,
      product.publisherId,
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

/**
 * get list products according to categoryId
 * @param {int} categoryId
 * @return {Array}
 */
const getListCategoryProducts = async (categoryId) => {
  const query = "select * from products where categoryId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, categoryId);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * get list products according to publisherId
 * @param {int} publisherId
 * @return {Array}
 */
const getListPublisherProducts = async (publisherId) => {
  const query = "select * from products where publisherId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, publisherId);
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
  getListCategoryProducts,
  getListPublisherProducts,
};
