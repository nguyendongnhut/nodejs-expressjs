const userModel = require("../models/user.model");

const checkUserAccount = async function (req, res, next) {
  try {
    let listUserAccounts = await userModel.checkUserAccount();

    for (let i = 0; i < listUserAccounts.length; i++) {
      if (listUserAccounts[i].useraccount === req.body.useraccount) {
        res.json("user account is exist");
      }
    }

    next();
  } catch (error) {
    res.json(error);
  }

  //   const bearer = String(req.headers.authorization.split(" ")[0]).toLowerCase();
  //   const bearerToken = req.headers.authorization.split(" ")[1];

  //   if (req.headers && req.headers.authorization && bearer === "bearer") {
  //     let token = bearerToken;
  //     jwt.verify(token, token_key.tokenKey, function (err, decode) {
  //       if (err) {
  //         return res.status(403).send({
  //           token,
  //           message: "Token invalid",
  //         });
  //       } else {
  //         return next();
  //       }
  //     });
  //   } else {
  //     return res.status(403).send({
  //       message: "Unauthorized",
  //     });
  //   }
};

module.exports = {
  checkUserAccount,
};
