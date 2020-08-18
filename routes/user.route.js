var express = require("express");

const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "./public/uploads/" });
const controller = require("../controllers/user.controller");
const validate = require("../validate/user.validate");

router.get("/", controller.index);

router.get("/create", controller.create);

router.get("/:id", controller.view);

router.post(
  "/create",
  upload.single("avatar"),
  validate.postCreate,
  controller.postCreate
);

router.get("/update/:id", controller.update);

router.post("/update/:id", controller.postUpdate);

router.get("/delete/:id", controller.delete);

router.post("/delete/:id", controller.postDelete);

module.exports = router;
