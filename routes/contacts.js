const express = require("express");
const router = express.Router();
const controller = require("../controllers/contacts");

router.get("/contacts", controller.getContact);

router.post("/contacts", controller.postContact);

router.get("/contacts/:id", controller.contactId);