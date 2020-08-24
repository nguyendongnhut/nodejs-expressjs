const productModel = require("../models/product.model");

// get list products
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
  let objectResult = {
    code: 201,
    error: "",
    product: req.body,
  };

  try {
    objectResult.data = await productModel.createProduct(objectResult.product);
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

// get list products according to categoryId
module.exports.getListCategoryProducts = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    categoryId: req.params.categoryId,
  };

  try {
    objectResult.data = await productModel.getListCategoryProducts(
      objectResult.categoryId
    );
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult.data);
};

// get list products according to publisherId
module.exports.getListPublisherProducts = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    publisherId: req.params.publisherId,
  };

  try {
    objectResult.data = await productModel.getListPublisherProducts(
      objectResult.publisherId
    );
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult.data);
};
