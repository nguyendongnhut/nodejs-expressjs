const pool = require("../../config/GetConnect");
const md5 = require("md5");

const checkUser = async (user) => {
  const query =
    "select userId from users where useraccount = ? and password = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, [
      user.useraccount,
      md5(user.password),
    ]);
  } catch (error) {
    throw error;
  }
  return rtData;
};

module.exports = {
  checkUser,
};
