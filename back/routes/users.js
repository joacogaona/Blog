const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  userLogin,
  userLogout,
  cookieUser,
  userRegister,
} = require("../controllers/users");

router.get("/cookieuser", cookieUser);
router.post("/login", passport.authenticate("local"), userLogin);
router.post("/logout", userLogout);
router.post("/register", userRegister);

module.exports = router;
