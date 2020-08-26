const jwt = require("jsonwebtoken");
const token_key = require("../../config/TokenKey");

module.exports.requireAuth = function (req, res, next) {
  const bearer = String(req.headers.authorization.split(" ")[0]).toLowerCase();

  if (req.headers && req.headers.authorization && bearer === "bearer") {
    let token = req.headers.authorization.split(" ")[1];
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
