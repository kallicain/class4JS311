const express = require("express");
const router = express.Router();
const controller = require("../controllers/comments");

router.get("/comments", controller.getComment);

router.post("/comments", controller.postComment);

router.get("/comments/:id", controller.getId);



