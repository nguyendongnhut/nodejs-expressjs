const pool = require("../../config/GetConnect");

const orderProducts = async () => {
  const query =
    "START TRANSACTION;\
    INSERT INTO orders (totalPrice, userId) VALUES (?, ?);\
    INSERT INTO orderdetails(orderNumber, price, orderId, productId) VALUES (?, ?,?,?);\
    COMMIT;";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query);
  } catch (error) {
    throw error;
  }

  return rtData;
};

module.exports = {
  orderProducts,
};
