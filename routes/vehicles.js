const express = require("express");
const router = express.Router();
const controller = require("../controllers/vehicles");

router.get("/vehicles", controller.getVehicle);

router.post("/vehicles", controller.postVehicle);

router.get("/vehicles/:id", controller.vehicleId);