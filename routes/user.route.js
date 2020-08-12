var express = require("express");

var router = express.Router();
var controller = require("../controllers/user.controller");

router.get("/", controller.index);

router.get("/create", controller.create);

router.get("/:id", controller.view);

router.post("/create", controller.postCreate);

router.get("/update/:id", controller.update);

router.post("/update/:id", controller.postUpdate);

router.get("/delete/:id", controller.delete);

router.post("/delete/:id", controller.postDelete);

module.exports = router;
