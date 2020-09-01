const express = require("express");
const userMiddleware = require("../middlewares/user.middleware");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.get("/", controller.viewUsers);

router.post("/", userMiddleware.checkUserAccount, controller.createUser);

router.get("/:id", controller.detailUser);

router.delete("/:id", controller.deleteUser);

router.put("/:id", controller.updateInfoUser);

router.put("/changePassword/:id", controller.changePassword);

module.exports = router;
