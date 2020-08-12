const shortId = require("shortid");

const db = require("../db");

module.exports.login = function (req, res) {
  res.render("login/login", {});
};
