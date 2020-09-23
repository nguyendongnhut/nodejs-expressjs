const pool = require("../../config/GetConnect");

const addOrders = async (order) => {
  const query = "INSERT INTO orders (totalPrice, userId) VALUES (?, ?);";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, [order.totalPrice, order.userId]);
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

const orderDetails = async (orderDetail) => {
  const query =
    "insert into orderdetails(orderNumber, price, orderId, productId) values ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(
      query,
      [
        orderDetail.map((item) => [
          item.orderNumber,
          item.price,
          item.orderId,
          item.productId,
        ]),
      ]
      // orderDetail.orderNumber,
      // orderDetail.price,
      // orderDetail.orderId,
      // orderDetail.productId,
    );
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
