const productModel = require("../models/product.model");
const fs = require("fs");
const path = require("path");

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
 * upload image when add new book
 * @param {object} req
 * @param {object} res
 */
const uploadImage = (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  // get file
  const file = req.files.image;

  file.mv(`${__dirname}/../../public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
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
  const productId = req.params.id;

  let objectResult = {
    code: 204,
    error: "",
  };
  try {
    objectResult.data = await productModel.deleteProduct(productId);
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
  const productId = req.params.id;
  const product = req.body;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult = await productModel.updateProduct(product, productId);
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
  const productId = req.params.id;

  let objectResult = {
    code: 200,
    error: "",
    data: [],
  };

  try {
    objectResult.data = await productModel.detailProduct(productId);
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
  const categoryId = req.params.categoryId;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await productModel.getListCategoryProducts(categoryId);
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
  const publisherId = req.params.publisherId;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await productModel.getListPublisherProducts(
      publisherId
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
  uploadImage,
};
