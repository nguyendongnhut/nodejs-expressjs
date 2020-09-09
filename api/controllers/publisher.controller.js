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
  const publisher = req.body;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult = await publisherModel.createPublisher(publisher);
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
  const publisherId = req.params.id;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult = await publisherModel.deletePublisher(publisherId);
  } catch (error) {
    objectResult.code = 500;
    objectResult.error = error;
  }

  res.json(objectResult);
};

const updatePublisher = async (req, res) => {
  const publisherId = req.params.id;
  const publisher = req.body;

  let objectResult = {
    code: 200,
    error: "",
  };

  try {
    objectResult = await publisherModel.updatePublisher(publisherId, publisher);
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
  updatePublisher,
};
