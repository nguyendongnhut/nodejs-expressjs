const pool = require("../../config/GetConnect");

/**
 * get list category
 * @return {Array}
 */
const getCategory = async () => {
  const query = "select * from categorys";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * create category
 * @param {object} category
 */
const createCategory = async (category) => {
  const query = "insert into categorys(name) values(?)";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, category.name);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * delete category according to categoryId
 * @param {int} id
 */
const deleteCategory = async (id) => {
  const query = "delete from categorys where categoryId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, id);
  } catch (error) {
    throw error;
  }

  return rtData;
};

module.exports = {
  getCategory,
  createCategory,
  deleteCategory,
};
