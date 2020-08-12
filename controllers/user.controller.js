const shortId = require("shortid");

const db = require("../db");

module.exports.index = function (req, res) {
  const q = req.query.q;
  const matchList = db
    .get("users")
    .value()
    .filter((user) => {
      return user.name.toLowerCase().indexOf(q) !== -1;
    });

  if (matchList.length > 0) {
    res.render("users/index", {
      users: matchList,
      question: q,
    });
  } else {
    res.render("users/index", {
      users: db.get("users").value(),
      question: q,
    });
  }
};

module.exports.create = function (req, res) {
  res.render("users/create");
};

module.exports.view = function (req, res) {
  const id = req.params.id;

  const user = db.get("users").find({ id: id }).value();
  res.render("users/view", {
    user: user,
  });
};

module.exports.postCreate = function (req, res) {
  req.body.id = shortId.generate();

  var errors = [];

  if (!req.body.name) {
    errors.push("Name is required !");
  }

  if (!req.body.phone) {
    errors.push("Phone is required !");
  }

  if (errors.length) {
    res.render("users/create", {
      errors: errors,
      value: req.body,
    });
    return;
  }

  db.get("users").push(req.body).write();
  res.redirect("/users");
};

module.exports.update = function (req, res) {
  const id = req.params.id;

  const user = db.get("users").find({ id: id }).value();
  res.render("users/update", {
    user: user,
  });
};

module.exports.postUpdate = function (req, res) {
  const uid = req.params.id;

  db.get("users").find({ id: uid }).assign({ name: req.body.name }).write();

  res.redirect("/users");
};

module.exports.delete = function (req, res) {
  const uid = req.params.id;

  const user = db.get("users").find({ id: uid }).value();
  res.render("users/delete", {
    user: user,
  });
};

module.exports.postDelete = function (req, res) {
  const uid = req.params.id;

  db.get("users").remove({ id: uid }).write();
  res.redirect("/users");
};
