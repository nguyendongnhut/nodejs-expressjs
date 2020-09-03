const userModel = require("../models/user.model");

/**
 * check whether the useraccount already exists
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
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
};

module.exports = {
  checkUserAccount,
};
