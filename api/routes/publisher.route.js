const express = require("express");

const router = express.Router();
const controller = require("../controllers/publisher.controller");

router.get("/", controller.viewPublishers);

router.post("/", controller.createPublisher);

router.delete("/:id", controller.deletePublisher);

module.exports = router;
