const express = require ("express");

//requiring the controller
const homeController = require("../controllers/home_controller");

const router = express.Router();

//using the home function of the controller module
router.get("/", homeController.home);
router.use("/users", require("./users"));
module.exports = router;