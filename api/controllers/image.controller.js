const productModel = require("../models/product.model");
const path = require("path");

const getImage = (req, res) => {
  const fileName = req.params.name;
  console.log("fileName", fileName);
  if (!fileName) {
    return res.send({
      status: false,
      message: "no filename specified",
    });
  }
  res.sendFile(path.resolve(`././public/uploads/${fileName}`));
};

module.exports = {
  getImage,
};
