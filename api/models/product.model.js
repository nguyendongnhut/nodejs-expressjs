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

module.exports = {
  getProduct,
  createProduct,
};
