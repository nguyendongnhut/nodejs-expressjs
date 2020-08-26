const publisherModel = require("../models/publisher.model");

/**
 * get list publisher
 * @param {object} req
 * @param {object} res
 */
const viewPublishers = async (req, res) => {
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

/**
 * create publisher according to publisherId
 * @param {object} req
 * @param {object} res
 */
const createPublisher = async (req, res) => {
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

/**
 * delete publisher according to publisherId
 * @param {object} req
 * @param {object} res
 */
const deletePublisher = async (req, res) => {
  let objectResult = {
    code: 200,
    error: "",
    publisherId: req.params.id,
  };

  try {
    objectResult = await publisherModel.deletePublisher(
      objectResult.publisherId
    );
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

module.exports = {
  viewPublishers,
  createPublisher,
  deletePublisher,
};
