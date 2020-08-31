const { User } = require("../models/index");

const userLogin = (req, res) => {
  res.status(201).send(req.user);
};

const registerUser = (req, res) => {
  User.findOne({
    username: req.body.username,
  }).then((foundUser) => {
    if (!foundUser) {
      User.create(req.body).then((user) => res.status(201).send(user));
    }
    if (foundUser) {
      res.sendStatus(401);
    }
  });
};

const userLogout = (req, res) => {
  req.logOut();
  res.status(201).send("DESLOGEADO");
};

const cookieUser = (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.json({});
  }
};

module.exports = {
  userLogin,
  registerUser,
  userLogout,
  cookieUser,
};
