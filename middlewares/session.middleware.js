const shortId = require("shortid");

const db = require("../db");

module.exports = function (req, res, next) {
  if (!req.signedCookies.sessionId) {
    const sessionId = shortId.generate();
    res.cookie("sessionId", sessionId, {
      signed: true,
    });

    db.get("sessions").push({ id: sessionId }).write();
  }

  next();
};
