const pool = require("../../config/GetConnect");

/**
 * get list publishers
 * @return {Array}
 */
const getPublishers = async () => {
  const query = "select * from publishers";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * create publisher
 * @param {object} publisher
 */
const createPublisher = async (publisher) => {
  const query = "insert into publishers(name) values(?)";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, publisher.name);
  } catch (error) {
    throw error;
  }

  return rtData;
};

/**
 * delete publisher according to publisherId
 * @param {int} id
 */
const deletePublisher = async (id) => {
  const query = "delete from publishers where publisherId = ?";

  let rtData = [];

  try {
    rtData = await pool.executeQuery(query, id);
  } catch (error) {
    throw error;
  }

  return rtData;
};

module.exports = {
  getPublishers,
  createPublisher,
  deletePublisher,
};
