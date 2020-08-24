const pool = require("../../config/GetConnect");

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
