var express = require("express");

var router = express.Router();
var controller = require("../controllers/user.controller");
var validate = require("../validate/user.validate");

router.get("/", controller.index);

router.get("/create", controller.create);

router.get("/:id", controller.view);

router.post("/create", validate.postCreate, controller.postCreate);

router.get("/update/:id", controller.update);

router.post("/update/:id", controller.postUpdate);

router.get("/delete/:id", controller.delete);

router.post("/delete/:id", controller.postDelete);

module.exports = router;
