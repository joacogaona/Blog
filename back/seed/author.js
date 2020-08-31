const User = require("../models/users");
require("../config/db");

const charmander = {
  firstName: "Joaquin",
  lastName: "Gaona",
  username: "joaquinngaona@gmail.com",
  password: "1234",
};

const charmander2 = {
  firstName: "Facundo",
  lastName: "Novaro",
  username: "facundonovaro@gmail.com",
  password: "1234",
};

User.insertMany([charmander, charmander2]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
