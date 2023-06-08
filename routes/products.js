const express = require("express");
const router = express.Router();
const controller = require("../controllers/products");


router.get("/products", controller.getProducts);

router.post("/products", controller.postProducts);

router.get("/products/:id", controller.productId);