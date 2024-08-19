const express = require("express");
const { transferController } = require("../controllers/transferController");

const router = express.Router();

//Defining the route
router.post("/transfer", transferController);

module.exports = router;
