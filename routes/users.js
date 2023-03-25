const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");
router.get("/profile", userController.profile);
router.get("/post", userController.post);
// router for sign in 
router.get("/sign-in", userController.signIn);
// router for sign up
router.get("/sign-up", userController.singUp);

router.post("/create", userController.create);
router.post("/create-session", userController.createSession);
router.get("/sign-out", userController.signOut);
module.exports = router;