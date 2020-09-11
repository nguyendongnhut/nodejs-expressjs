const express = require("express");

const multer = require("multer");

const upload = multer({ dest: "././public/uploads/" });

const router = express.Router();
const controller = require("../controllers/product.controller");

router.get("/", controller.viewProducts);

router.get("/:id", controller.detailProduct);

router.post("/", upload.single("image"), controller.createProduct);

router.delete("/:id", controller.deleteProduct);

router.put("/:id", controller.updateProduct);

router.get("/categorys/:categoryId", controller.getListCategoryProducts);

router.get("/publishers/:publisherId", controller.getListPublisherProducts);

router.post("/uploadImage", controller.uploadImage);

module.exports = router;
