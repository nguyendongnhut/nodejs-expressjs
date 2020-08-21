const pool = require("../../config/GetConnect");

const md5 = require("md5");

/**
 * get list user
 * @return {Array}
 */
const getUser = async () => {
  const query = "select * from users";

  let rtData = [];
  try {
    rtData = await pool.executeQuery(query);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * create new user
 * @param {object} user
 */
const createUser = async (user) => {
  const query =
    "INSERT INTO `users`(name, phone, email, password) VALUES (?, ?, ?, ?)";

  let rtData = [];
  try {
    rtData = await pool.executeQuery(query, [
      user.name,
      user.phone,
      user.email,
      md5(user.password),
    ]);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * get detail user according to userId
 * @param {int} userId
 * @return {Array}
 */
const detailUser = async (userId) => {
  const query = "select * from users where userId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, userId);
  } catch (error) {
    throw error;
  }

  return rtData;
};

const deleteUser = async (userId) => {
  const query = "delete from users where userId = ?";

  let rtData = [];
  try {
    rtData = await pool.executeQuery(query, userId);
  } catch (error) {
    throw error;
  }

  return rtData;
};

module.exports = {
  getUser,
  createUser,
  detailUser,
  deleteUser,
};
