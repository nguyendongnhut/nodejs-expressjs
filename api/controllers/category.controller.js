const categoryModel = require("../models/category.model");

/**
 * get list categorys
 * @param {object} req
 * @param {object} res
 */
const viewCategory = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    data: [],
  };

  try {
    objectResult.data = await categoryModel.getCategory();
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult.data);
};

/**
 * create category
 * @param {object} req
 * @param {object} res
 */
const createCategory = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    category: req.body,
  };

  try {
    objectResult = await categoryModel.createCategory(objectResult.category);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

/**
 * delete category according to categoryId
 * @param {object} req
 * @param {object} res
 */
const deleteCategory = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    categoryId: req.params.id,
  };

  try {
    objectResult = await categoryModel.deleteCategory(objectResult.categoryId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

module.exports = {
  viewCategory,
  createCategory,
  deleteCategory,
};
