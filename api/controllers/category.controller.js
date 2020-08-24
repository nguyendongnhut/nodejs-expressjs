const categoryModel = require("../models/category.model");

// get list categorys
module.exports.viewCategory = async (req, res) => {
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

// create category
module.exports.createCategory = async (req, res) => {
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

// delete category according to categoryId
module.exports.deleteCategory = async (req, res) => {
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
