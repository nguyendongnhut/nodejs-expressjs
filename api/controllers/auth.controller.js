const authModel = require("../models/auth.model");
const userModel = require("../models/user.model");

const token_key = require("../../config/TokenKey");
const jwt = require("jsonwebtoken");
/**
 * get list user
 * @param {object} req
 * @param {object} res
 */
const checkUser = async (req, res) => {
  const params = req.body;
  let dataResult = {};
  let userResult = [];

  try {
    userResult = await authModel.checkUser(params);

    if (userResult.length > 0) {
      let body = {
        userId: userResult[0].userId,
      };

      const token = jwt.sign({ body }, token_key.tokenKey, {
        algorithm: "HS256",
        expiresIn: "3h",
      });

      dataResult.statusCode = 200;
      dataResult.access_token = token;

      res.json(dataResult);
    } else {
      dataResult.statusCode = 400;
      dataResult.message = "useraccount or password is not correct";
      res.send(dataResult);
    }
  } catch (error) {
    dataResult.code = 500;
    dataResult.error = error;
  }
};

module.exports = {
  checkUser,
};
