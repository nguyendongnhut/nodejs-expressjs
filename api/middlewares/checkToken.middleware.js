const jwt = require("jsonwebtoken");
const token_key = require("../../config/TokenKey");

/**
 * check token when send request to api
 * @param {string} req
 * @param {*} res
 * @param {*} next
 */
module.exports.checkToken = function (req, res, next) {
  // cut string token get value = bearer
  const bearer = req.headers.authorization.split(" ")[0].toLowerCase();
  // cut string token get access_token
  const bearerToken = req.headers.authorization.split(" ")[1];

  if (req.headers && req.headers.authorization && bearer === "bearer") {
    let token = bearerToken;
    jwt.verify(token, token_key.tokenKey, function (err, decode) {
      if (err) {
        return res.status(403).send({
          token,
          message: "Token invalid",
        });
      } else {
        return next();
      }
    });
  } else {
    return res.status(403).send({
      message: "Unauthorized",
    });
  }
};
