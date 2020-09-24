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

module.exports = {
  addOrders,
  getOrderId,
  orderDetails,
};
