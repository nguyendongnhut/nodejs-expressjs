const express = require("express");
const checkToken = require("../middlewares/checkToken.middleware");

const router = express.Router();
const controller = require("../controllers/cart.controller");

router.post("/orders", checkToken.checkToken, controller.addOrders);

// get orderId create
router.get("/:id", controller.getOrderId);

router.post("/orderDetails", controller.orderDetails);

module.exports = router;
