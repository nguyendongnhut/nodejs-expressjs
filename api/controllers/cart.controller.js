const cartModel = require("../models/cart.model");
const atob = require("atob");

/**
 * add info new order
 * @param {*} req
 * @param {*} res
 */
const addOrders = async (req, res) => {
  // get string token received from client
  const bearerToken = req.headers.authorization;

  // hàm phân tích chuỗi token để lấy trị payload bên trong chuỗi token
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

  // get userId from string token
  let userId = parseJwt(bearerToken).body.userId;
  let totalPrice = req.body;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await cartModel.addOrders(totalPrice, userId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

/**
 * get orderId of order just added
 * @param {*} req
 * @param {*} res
 */
const getOrderId = async (req, res) => {
  let id = req.params.id;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await cartModel.getOrderId(id);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

/**
 * add details of order with userId ordered
 * @param {*} req
 * @param {*} res
 */
const orderDetails = async (req, res) => {
  let details = req.body;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await cartModel.orderDetails(details);
  } catch (error) {
    (objectResult.code = 500), (objectResult.error = error);
  }

  res.json(objectResult);
};

/**
 * get all order in table orders
 * @param {object} req
 * @param {object} res
 * @return {Array}
 */
const getAllOrders = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await cartModel.getAllOrders();
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

/**
 * get order in table orders according to userId
 * @param {object} req
 * @param {object} res
 */
const getOrderByUserId = async (req, res) => {
  let userId = req.params.userId;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await cartModel.getOrderByUserId(userId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

/**
 * get order in table orders according to orderId
 * @param {object} req
 * @param {object} res
 */
const getOrderByOrderId = async (req, res) => {
  let orderId = req.params.orderId;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await cartModel.getOrderByOrderId(orderId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

const getDetailOrderByUserId = async (req, res) => {
  const userId = req.params.userId;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await cartModel.getDetailOrderByUserId(userId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

const getDetailOrderByOrderId = async (req, res) => {
  let orderId = req.params.orderId;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await cartModel.getDetailOrderByOrderId(orderId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

/**
 *
 * @param {object} req
 * @param {object} res
 */
const deleteOrderByOrderId = async (req, res) => {
  const orderId = req.params.orderId;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await cartModel.deleteOrderByOrderId(orderId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

const deleteOrderDetailByOrderId = async (req, res) => {
  const orderId = req.params.orderId;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await cartModel.deleteOrderDetailByOrderId(orderId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
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
  deleteOrderByOrderId,
  deleteOrderDetailByOrderId,
};
