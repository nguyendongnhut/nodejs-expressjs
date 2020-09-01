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
  let objectResult = {
    code: 200,
    error: "",
    user: req.body,
  };

  try {
    objectResult.data = await userModel.createUser(objectResult.user);
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
  let objectResult = {
    code: 200,
    error: "",
    userId: req.params.userId,
  };

  try {
    objectResult.data = await userModel.detailUser(objectResult.userId);
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
  let objectResult = {
    code: 200,
    error: "",
    userId: req.params.id,
  };

  try {
    objectResult = await userModel.deleteUser(objectResult.userId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

const updateInfoUser = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    userId: req.params.id,
    user: req.body,
  };

  try {
    objectResult.data = await userModel.updateInfoUser(
      objectResult.user,
      objectResult.userId
    );
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

const changePassword = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    user: req.body,
    userId: req.params.id,
  };

  try {
    objectResult.data = await userModel.changePassword(
      objectResult.user,
      objectResult.userId
    );
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
