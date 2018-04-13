const express = require("express");
const router = express.Router();
const { signup, signin, update } = require("../handlers/auth");

router.post("/signup", signup);
router.post("/signin", signin);
router.put("/update/:id", update);

module.exports = router;
