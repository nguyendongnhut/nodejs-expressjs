const express = require("express");

const router = express.Router();
const controller = require("../controllers/product.controller");

router.get("/products", controller.viewProducts);

router.post("/products", controller.createProduct);

module.exports = router;
