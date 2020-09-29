const express = require("express");
const checkToken = require("../middlewares/checkToken.middleware");

const router = express.Router();
const controller = require("../controllers/cart.controller");

router.post("/orders", checkToken.checkToken, controller.addOrders);

// get orderId create
router.get("/:id", controller.getOrderId);

router.post("/orderDetails", controller.orderDetails);

router.get("/orderId/:orderId", controller.getOrderByOrderId);

router.get("/orders/all", controller.getAllOrders);

router.get("/userId/:userId", controller.getOrderByUserId);

router.get("/orderDetail/userId/:userId", controller.getDetailOrderByUserId);

router.get("/orderDetail/orderId/:orderId", controller.getDetailOrderByOrderId);

router.post("/deleteOrder/orderId/:orderId", controller.deleteOrderByOrderId);

router.post(
  "/deleteOrderDetail/orderId/:orderId",
  controller.deleteOrderDetailByOrderId
);

module.exports = router;
