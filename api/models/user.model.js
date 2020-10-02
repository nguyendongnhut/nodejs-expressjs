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

const getUserName = async (userId) => {
  const query = "select username, userId from users where userId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, userId);
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
    "INSERT INTO `users`(username, email, phone, useraccount, password) VALUES (?, ?, ?, ?, ?)";

  let rtData = [];
  try {
    rtData = await pool.executeQuery(query, [
      user.username,
      user.email,
      user.phone,
      user.useraccount,
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
  const query = "select username, email, phone from users where userId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, userId);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * get lists useraccount
 * @return {Array}
 */
const checkUserAccount = async () => {
  const query = "select useraccount from users";

  let rtData = [{}];

  try {
    rtData = await pool.executeQuery(query);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * delete user according to userId
 * @param {int} userId
 */
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

/**
 * update info user according to userId
 * @param {object} user
 * @param {int} id
 */
const updateInfoUser = async (user, id) => {
  const query =
    "UPDATE `users` SET `username`= ?,`email`=?,`phone`=? WHERE userId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, [
      user.username,
      user.email,
      user.phone,
      id,
    ]);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * change password of user according to userId
 * @param {object} user
 * @param {int} id
 */
const changePassword = async (user, id) => {
  const query = "UPDATE `users` SET `password`=? WHERE userId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, [md5(user.password), id]);
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
  checkUserAccount,
  updateInfoUser,
  changePassword,
  getUserName,
};
