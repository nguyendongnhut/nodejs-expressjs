const db = require("../db");

module.exports.countCart = function (req, res, next) {
  sessionId = req.signedCookies.sessionId;
  const data = db.get("sessions").find({ id: sessionId }).get("cart").value();

  if (!data) {
    const value = 0;
  }

  const value = Object.values(data).reduce((acc, cur) => acc + cur, 0);

  res.locals.allProduct = value;

  next();
};
