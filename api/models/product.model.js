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

module.exports = {
  getProduct,
};
