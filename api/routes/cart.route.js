const express = require("express");

const router = express.Router();
const controller = require("../controllers/cart.controller");

router.post("/orders", controller.addOrders);

// get orderId create
router.get("/:id", controller.getOrderId);

router.post("/orderDetails", controller.orderDetails);

module.exports = router;
