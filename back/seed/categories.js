const Category = require("../models/categories");
require("../config/db");

const charmander = {
  categoryTitle: "Diseño",
};

const charmander2 = {
  categoryTitle: "Programación",
};

const bulbasaur = {
  categoryTitle: "Negocio",
};

const squirtle = {
  categoryTitle: "UI",
};

Category.insertMany([charmander, charmander2, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
