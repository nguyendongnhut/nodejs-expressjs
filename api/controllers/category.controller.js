const categodyModel = require("../models/category.model");

module.exports.viewCategory = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    data: [],
  };

  try {
    objectResult = await categodyModel.getCategory();
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult.data);
};

module.exports.createCategory = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    category: req.body,
  };

  try {
    objectResult = await categodyModel.createCategory(objectResult.category);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};
