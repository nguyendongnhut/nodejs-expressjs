const pool = require("../../config/GetConnect");
const { TokenExpiredError } = require("jsonwebtoken");
const { query } = require("express");

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
 * @return {Array}
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

/**
 * get list order in table orders
 * @return {Array}
 */
const getAllOrders = async () => {
  const query = "select * from `orders`";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * get list order in table orders according to userId
 * @param {number} userId
 * @return {Array}
 */
const getOrderByUserId = async (userId) => {
  const query = "select * from orders where userId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, userId);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * get list order in table orders according to orderId
 * @param {number} orderId
 * @return {Array}
 */
const getOrderByOrderId = async (orderId) => {
  const query = "select * from orders where orderId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, orderId);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * get list detail products in table orderDetails according to userId
 * @param {number} userId
 * @return {Array}
 */
const getDetailOrderByUserId = async (userId) => {
  const query =
    "select * from (orderdetails as oD, orders as oDs) where oD.orderId = oDs.orderId and oDs.userId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, userId);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * get list detail products in table orderDetails according to orderId
 * @param {number} orderId
 * @return {Array}
 */
const getDetailOrderByOrderId = async (orderId) => {
  const query = "select * from orderdetails where orderId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, orderId);
  } catch (error) {
    throw error;
  }

  return rtData;
};

module.exports = {
  addOrders,
  getOrderId,
  orderDetails,
  getAllOrders,
  getOrderByUserId,
  getOrderByOrderId,
  getDetailOrderByUserId,
  getDetailOrderByOrderId,
};
