const md5 = require("md5");

const db = require("../db");

module.exports.login = function (req, res) {
  res.render("auth/login");
};

module.exports.postLogin = function (req, res) {
  const uEmail = req.body.email;
  const uPassword = req.body.password;

  const user = db.get("users").find({ email: uEmail }).value();

  if (!uEmail) {
    res.render("auth/login", {
      errors: ["Email is empty."],
      value: req.body,
    });
    return;
  }

  if (!uPassword) {
    res.render("auth/login", {
      errors: ["Password is empty"],
      value: req.body,
    });
    return;
  }

  if (!user) {
    res.render("auth/login", {
      errors: ["User does not exist."],
      value: req.body,
    });
    return;
  }

  const hashPassword = md5(uPassword);

  if (hashPassword !== user.password) {
    res.render("auth/login", {
      errors: ["Wrong password."],
      value: req.body,
    });
    return;
  }

  res.cookie("userId", user.id, {
    signed: true,
  });
  res.redirect("/users");
};
