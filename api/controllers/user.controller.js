const userModel = require("../models/user.model");

/**
 * get list user
 * @param {object} req
 * @param {object} res
 */
const viewUsers = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    data: [],
  };

  try {
    objectResult.data = await userModel.getUser();
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult.data);
};

/**
 * create user
 * @param {object} req
 * @param {object} res
 */
const createUser = async (req, res) => {
  const user = req.body;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await userModel.createUser(user);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

/**
 * get detail user according to userId
 * @param {object} req
 * @param {object} res
 */
const detailUser = async (req, res) => {
  const userId = req.params.userId;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await userModel.detailUser(userId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult.data);
};

/**
 * delete user according to userId
 * @param {object} req
 * @param {object} res
 */
const deleteUser = async (req, res) => {
  const userId = req.params.id;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult = await userModel.deleteUser(userId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

const updateInfoUser = async (req, res) => {
  const userId = req.params.id;
  const user = req.body;
  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await userModel.updateInfoUser(user, userId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

const changePassword = async (req, res) => {
  const userId = req.params.id;
  const user = req.body;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await userModel.changePassword(user, userId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

module.exports = {
  viewUsers,
  createUser,
  detailUser,
  deleteUser,
  updateInfoUser,
  changePassword,
};
