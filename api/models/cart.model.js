const pool = require("../../config/GetConnect");

const addOrders = async (totalPrice, userId) => {
  const query = "INSERT INTO orders (totalPrice, userId) VALUES (?, ?);";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, [totalPrice.totalPrice, userId]);
  } catch (error) {
    throw error;
  }

  return rtData;
};

const getOrderId = async (id) => {
  const query = "select orderId from orders where orderId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, id);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * detail of order
 * @param {object} orderDetail
 *
 */
const orderDetails = async (orderDetail) => {
  const query =
    "insert into orderdetails(orderNumber, price, orderId, productId) values ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, [
      // map orderDetail into one array
      orderDetail.cart.map((item) => [
        item.count,
        item.price,
        item.orderId,
        item.id,
      ]),
    ]);
  } catch (error) {
    throw error;
  }

  return rtData;
};

module.exports = {
  addOrders,
  getOrderId,
  orderDetails,
};
