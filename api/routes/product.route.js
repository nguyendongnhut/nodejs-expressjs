const express = require("express");

const router = express.Router();
const controller = require("../controllers/product.controller");

router.get("/", controller.viewProducts);

router.get("/:id", controller.detailProduct);

router.post("/", controller.createProduct);

router.delete("/:id", controller.deleteProduct);

router.put("/:id", controller.updateProduct);

module.exports = router;
