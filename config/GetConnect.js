const con = require("./connect");

/**
 * Get pool connection to execute query
 * @param {String} queryString query string
 * @param {Object} param query param
 * @return {Promise}
 */
const executeQuery = (queryString, param = {}) => {
  const resultPromise = new Promise((resolve, reject) => {
    con.getConnection(function (err, connection) {
      if (err) {
        if (connection) {
          connection.release();
        }
        reject(err);
      } else {
        connection.query(queryString, param, (err, rows) => {
          connection.release();
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      }
    });
  });

  return resultPromise;
};

module.exports = {
  executeQuery,
};
