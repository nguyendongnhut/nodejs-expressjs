const express = require("express");

const router = express.Router();
const controller = require("../controllers/product.controller");

router.get("/products", controller.viewProducts);

router.get("/products/:id", controller.detailProduct);

router.post("/products", controller.createProduct);

router.delete("/products/:id", controller.deleteProduct);

router.put("/products/:id", controller.updateProduct);

module.exports = router;
