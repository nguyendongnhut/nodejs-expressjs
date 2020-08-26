const authModel = require("../models/auth.model");
const token_key = require("../../config/TokenKey");
const jwt = require("jsonwebtoken");
/**
 * get list user
 * @param {object} req
 * @param {object} res
 */
const checkUser = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    user: req.body,
    data: [],
  };

  try {
    objectResult.data = await authModel.checkUser(objectResult.user);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  if (objectResult.data.length > 0) {
    let body = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    var token = jwt.sign({ body }, token_key.tokenKey, {
      algorithm: "HS256",
      expiresIn: "3h",
    });

    res.json({ access_token: token });
  } else {
    res.send("đăng nhập thất bại");
  }

  //   res.json(objectResult.data);
};

module.exports = {
  checkUser,
};
