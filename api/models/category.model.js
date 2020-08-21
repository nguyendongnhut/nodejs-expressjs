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

module.exports = {
  getCategory,
  createCategory,
};
