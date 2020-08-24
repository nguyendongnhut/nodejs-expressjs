const userModel = require("../models/user.model");

// view list user
module.exports.viewUsers = async (req, res) => {
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

// create user
module.exports.createUser = async (req, res) => {
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

// get detail user according to userId
module.exports.detailUser = async (req, res) => {
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

// delete user according to userId
module.exports.deleteUser = async (req, res) => {
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
