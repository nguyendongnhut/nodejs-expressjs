const pool = require("../../config/GetConnect");

const checkUser = async (user) => {
  const query =
    "select name , email , password from users where name = ? and email = ? and password = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, [
      user.name,
      user.email,
      user.password,
    ]);
  } catch (error) {
    throw error;
  }
  return rtData;
};

module.exports = {
  checkUser,
};
