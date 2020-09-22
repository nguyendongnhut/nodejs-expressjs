const express = require("express");

const router = express.Router();
const controller = require("../controllers/cart.controller");

router.post("/", controller.orderProducts);

module.exports = router;
