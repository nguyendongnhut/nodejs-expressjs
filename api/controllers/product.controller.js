const productModel = require("../models/product.model");

/**
 * get list products
 * @param {object} req
 * @param {object} res
 */
const viewProducts = async (req, res) => {
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

/**
 * create product
 * @param {object} req
 * @param {object} res
 */
const createProduct = async (req, res) => {
  product = req.body;

  let objectResult = {
    code: 201,
    error: "",
  };

  try {
    objectResult.data = await productModel.createProduct(product);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

/**
 * delete product according to productId
 * @param {object} req
 * @param {object} res
 */
const deleteProduct = async (req, res) => {
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

/**
 * update product according to productId
 * @param {object} req
 * @param {object} res
 */
const updateProduct = async (req, res) => {
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

/**
 * get detail product according to productId
 * @param {object} req
 * @param {object} res
 */
const detailProduct = async (req, res) => {
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

/**
 * get list products according to categoryId
 * @param {object} req
 * @param {object} res
 */
const getListCategoryProducts = async (req, res) => {
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

/**
 * get list products according to publisherId
 * @param {object} req
 * @param {object} res
 */
const getListPublisherProducts = async (req, res) => {
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

module.exports = {
  viewProducts,
  createProduct,
  deleteProduct,
  getListCategoryProducts,
  getListPublisherProducts,
  detailProduct,
  updateProduct,
};
