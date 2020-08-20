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

// create product
module.exports.createProduct = async (req, res) => {
  // const data = await productModel.createProduct(product, function (err, rows) {
  //   if (err) {
  //     res.status(400).send(err);
  //     return;
  //   }
  //   res.send(rows);
  // });
  const product = req.body;

  let objectResult = {
    code: 201,
    error: "",
    product: product,
  };
  try {
    objectResult.data = await productModel.createProduct(product);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

// delete product according to productId
module.exports.deleteProduct = async (req, res) => {
  let objectResult = {
    code: 204,
    error: "",
    productId: req.params.id,
  };
  try {
    objectResult.data = await productModel.deleteProduct(
      objectResult.productId
    );
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

//update info product according to productId
module.exports.updateProduct = async (req, res) => {
  const product = req.body;

  let objectResult = {
    code: 200,
    error: "",
    productId: req.params.id,
    product: product,
  };

  try {
    objectResult = await productModel.updateProduct(
      objectResult.product,
      objectResult.productId
    );
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

// get detail product according to productId
module.exports.detailProduct = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    data: [],
    productId: req.params.id,
  };

  try {
    objectResult.data = await productModel.detailProduct(
      objectResult.productId
    );
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult.data);
};
