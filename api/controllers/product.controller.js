const productModel = require("../models/product.model");

module.exports.viewProducts = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    data: [],
  };
  try {
    objectResult.data = await productModel.getProduct();
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult.data);
};

module.exports.createProduct = async (req, res) => {
  var product = req.body;
  // const data = await productModel.createProduct(product, function (err, rows) {
  //   if (err) {
  //     res.status(400).send(err);
  //     return;
  //   }
  //   res.send(rows);
  // });

  let objectResult = {
    code: 200,
    error: "",
    product: req.body,
  };
  try {
    objectResult.data = await productModel.createProduct(product);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};
