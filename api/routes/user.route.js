const express = require("express");

const router = express.Router();
const controller = require("../controllers/user.controller");

router.get("/", controller.viewUsers);

router.post("/", controller.createUser);

router.get("/:id", controller.detailUser);

router.delete("/:id", controller.deleteUser);

module.exports = router;
