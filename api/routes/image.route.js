const express = require("express");
const router = express.Router();
const controller = require("../controllers/image.controller");

router.get("/:name", controller.getImage);

module.exports = router;
