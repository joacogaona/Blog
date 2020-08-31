const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  userLogin,
  registerUser,
  userLogout,
  cookieUser,
} = require("../controllers/users");

router.post("/login", passport.authenticate("local"), userLogin);
router.post("/create", registerUser);
router.post("/logout", userLogout);
router.get("/cookieuser", cookieUser);

module.exports = router;
