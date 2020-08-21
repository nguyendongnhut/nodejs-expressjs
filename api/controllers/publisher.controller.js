const publisherModel = require("../models/publisher.model");

module.exports.viewPublishers = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    data: [],
  };

  try {
    objectResult.data = await publisherModel.getPublishers();
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult.data);
};

module.exports.createPublisher = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    publisher: req.body,
  };

  try {
    objectResult = await publisherModel.createPublisher(objectResult.publisher);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};
