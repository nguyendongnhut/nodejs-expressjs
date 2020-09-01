const db = require("../db");

const fetch = require("node-fetch");

const jwt = require("jsonwebtoken");

var sessionStorage = require("sessionstorage");

module.exports.requireAuth = function (req, res, next) {
  if (
    !sessionStorage.getItem("token") &&
    sessionStorage.getItem("token") === null
  ) {
    res.redirect("/auth/login");
    return;
  } else {
    next();
  }

  // const user = db.get("users").find({ id: req.signedCookies.userId }).value();

  // if (!user) {
  //   res.redirect("/auth/login");
  //   return;
  // }

  // if (
  //   req.headers &&
  //   req.headers.authorization &&
  //   String(req.headers.authorization.split(" ")[0]).toLowerCase() === "bearer"
  // ) {
  //   let token = req.headers.authorization.split(" ")[1];
  //   jwt.verify(token, process.env.SECRETKEY_TOKEN, function (err, decode) {
  //     if (err) {
  //       return res.status(403).send({
  //         message: "Token invalid",
  //       });
  //     } else {
  //       return next();
  //     }
  //   });
  // } else {
  //   return res.status(403).send({
  //     message: "Unauthorized",
  //   });
  // }

  // let user = [];

  // fetch("http://localhost:3001/api/users", {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // })
  //   .then(async (response) => {
  //     data = await response.json();

  //     user = data.filter((item) => {
  //       return item.userId === req.signedCookies.userId;
  //     });

  //     if (!user) {
  //       res.redirect("/auth/login");
  //       return;
  //     }

  //     return data;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // res.locals.user = user;
};
