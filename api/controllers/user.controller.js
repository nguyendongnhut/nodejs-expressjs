const userModel = require("../models/user.model");

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

module.exports.createUser = async (req, res) => {
  const user = req.body;

  let objectResult = {
    code: 200,
    error: "",
    user: user,
  };

  try {
    objectResult.data = await userModel.createUser(user);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

module.exports.detailUser = async (req, res) => {
  const userId = req.params.id;

  let objectResult = {
    code: 200,
    error: "",
    userId: userId,
  };

  try {
    objectResult.data = await userModel.detailUser(userId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult.data);
};

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
