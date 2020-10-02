const userModel = require("../models/user.model");
const atob = require("atob");
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

const getUserName = async (req, res) => {
  // get string token received from client
  const bearerToken = req.headers.authorization;

  // hàm phân tích chuỗi token để lấy trị payload bên trong chuỗi token
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

  const userId = parseJwt(bearerToken).body.userId;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await userModel.getUserName(userId);
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

/**
 * update info user
 * @param {object} req
 * @param {object} res
 */
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

/**
 * change password user
 * @param {object} req
 * @param {object} res
 */
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
  getUserName,
};
