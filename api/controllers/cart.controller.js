const cartModel = require("../models/cart.model");

const orderProducts = async (req, res) => {
  let order = req.body;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await cartModel.orderProducts(order);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

module.exports = {
  orderProducts,
};
