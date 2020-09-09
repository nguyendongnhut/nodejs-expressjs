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
  const category = req.body;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult = await categoryModel.createCategory(category);
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
  const categoryId = req.params.id;
  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult = await categoryModel.deleteCategory(categoryId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

/**
 * change name category according to categoryId
 * @param {object} req
 * @param {object} res
 */
const updateCategory = async (req, res) => {
  const categoryId = req.params.id;
  const category = req.body;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult.data = await categoryModel.updateCategory(
      categoryId,
      category
    );
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
  updateCategory,
};
