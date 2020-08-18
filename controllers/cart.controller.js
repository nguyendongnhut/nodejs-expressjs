const db = require("../db");

module.exports.addToCart = function (req, res) {
  const productId = req.params.productId;
  const sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect("/products");
    return;
  }

  let count = db
    .get("sessions")
    .find({ id: sessionId })
    .get("cart." + productId, 0)
    .value();

  db.get("sessions")
    .find({ id: sessionId })
    .set("cart." + productId, count + 1)
    .write();

  // const data = db.get("sessions").find({ id: sessionId }).get("cart").value();

  // if (!data) {
  //   const value = 0;
  // }

  // const value = Object.values(data).reduce((acc, cur) => acc + cur, 0);

  // res.locals.allProduct = value;

  res.redirect("/products");
};
