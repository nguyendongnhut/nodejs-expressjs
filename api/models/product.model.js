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
    "INSERT INTO `products`(name, authorname, image, description, price, categoryId, publisherId) VALUES (?,?,?,?,?,?,?)";

  let rtData = [];
  try {
    rtData = await pool.executeQuery(query, [
      product.name,
      product.authorname,
      product.image,
      product.description,
      product.price,
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
  const query =
    "SELECT pr.productId, pr.name, pr.authorname, pr.price, pr.image, pr.description, pr.categoryId, pr.publisherId, ct.name as categoryName, pl.name as publisherName \
  FROM products as pr, publishers as pl, categorys as ct \
  WHERE pr.categoryId = ct.categoryId and pr.publisherId = pl.publisherId and pr.productId = ?";

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

const getProductQuery = async (search) => {
  let query =
    "select pr.productId, pr.image, pr.name, pr.authorname, pr.image, pr.price " +
    " from products as pr, publishers as pb, categorys as ct " +
    " where pr.categoryId = ct.categoryId and pr.publisherId = pb.publisherId ";

  if (search.lowPrice === "") {
    query += `and pr.price BETWEEN "0" `;
  } else {
    query += `and pr.price BETWEEN ${search.lowPrice} `;
  }

  if (search.highPrice === "") {
    query += `and "999999999" `;
  } else {
    query += `and ${search.highPrice} `;
  }

  if (search.name != "") {
    query += `and pr.name LIKE "%${search.name}%" `;
  }

  if (search.authorname != "") {
    query += `and pr.authorname LIKE "%${search.authorname}%" `;
  }

  if (search.publisherId != "") {
    query += `and pb.publisherId = ${search.publisherId} `;
  }

  if (search.categoryId != "") {
    query += `and ct.categoryId = ${search.categoryId} `;
  }

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, [
      search.lowPrice,
      search.highPrice,
      search.name,
      search.authorname,
      search.publisherId,
      search.categoryId,
    ]);
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
  getProductQuery,
};
