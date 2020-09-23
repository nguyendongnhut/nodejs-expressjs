const cartModel = require("../models/cart.model");

const addOrders = async (req, res) => {
  let order = req.body;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await cartModel.addOrders(order);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

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
