const md5 = require("md5");

let fetch = require("node-fetch");
// const db = require("../db");

const jwt = require("jsonwebtoken");

module.exports.login = function (req, res) {
  res.render("auth/login");
};

module.exports.postLogin = function (req, res) {
  const uEmail = req.body.email;
  const uPassword = req.body.password;

  // let users = [];

  fetch("http://localhost:3001/api/users", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(async (response) => {
      data = await response.json();

      let user = data.filter((item) => {
        return uEmail === item.email;
      });

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

      if (hashPassword !== user[0].password) {
        res.render("auth/login", {
          errors: ["Wrong password."],
          value: req.body,
        });
        return;
      }

      // let body = {
      //   name: user[0].name,
      //   email: user[0].email,
      //   phone: user[0].phone,
      //   password: user[0].password,
      // };
      // var token = jwt.sign({ body }, process.env.SECRETKEY_TOKEN, {
      //   algorithm: "HS256",
      //   expiresIn: "3h",
      // });

      res.cookie("userId", user[0].userId, {
        signed: true,
      });
      // res.json({ access_token: token });
      res.redirect("/users");

      return data;
    })
    .catch((err) => {
      console.log(err);
    });

  // const user = db.get("users").find({ email: uEmail }).value();
  // const user = users.filter((item) => {
  //   return uEmail == item.email;
  // });

  // if (!uEmail) {
  //   res.render("auth/login", {
  //     errors: ["Email is empty."],
  //     value: req.body,
  //   });
  //   return;
  // }

  // if (!uPassword) {
  //   res.render("auth/login", {
  //     errors: ["Password is empty"],
  //     value: req.body,
  //   });
  //   return;
  // }

  // if (!user) {
  //   res.render("auth/login", {
  //     errors: ["User does not exist."],
  //     value: req.body,
  //   });
  //   return;
  // }

  // const hashPassword = md5(uPassword);

  // if (hashPassword !== user.password) {
  //   res.render("auth/login", {
  //     errors: ["Wrong password."],
  //     value: req.body,
  //   });
  //   return;
  // }

  // res.cookie("userId", user.id, {
  //   signed: true,
  // });
  // res.redirect("/users");
};
