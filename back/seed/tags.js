const Tag = require("../models/tags");
require("../config/db");

const charmander = {
  tagTitle: "HTML",
};

const charmander2 = {
  tagTitle: "CSS",
};

const bulbasaur = {
  tagTitle: "Javascript",
};

const squirtle = {
  tagTitle: "Programación",
};

Tag.insertMany([charmander, charmander2, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
