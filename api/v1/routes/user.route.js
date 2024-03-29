const express = require('express');
const router = express.Router();

const validate = require("../../../validates/account.validate")
const controller = require("../controllers/user.controller");

router.post("/register", validate.createPost, controller.register);

router.post("/login", controller.login);

module.exports = router;