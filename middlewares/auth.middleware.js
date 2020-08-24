const db = require("../db");

const fetch = require("node-fetch");

module.exports.requireAuth = function (req, res, next) {
  if (!req.signedCookies.userId) {
    res.redirect("/auth/login");
    return;
  }

  // const user = db.get("users").find({ id: req.signedCookies.userId }).value();

  // if (!user) {
  //   res.redirect("/auth/login");
  //   return;
  // }

  let user = [];

  fetch("http://localhost:3001/api/users", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(async (response) => {
      data = await response.json();

      user = data.filter((item) => {
        return item.userId === req.signedCookies.userId;
      });

      if (!user) {
        res.redirect("/auth/login");
        return;
      }

      return data;
    })
    .catch((err) => {
      console.log(err);
    });

  res.locals.user = user;

  next();
};
