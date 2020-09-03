const User = require("../models/users");
require("../config/db");

const charmander = {
  firstName: "Joaquin",
  lastName: "Gaona",
  userJob: "Profesor asistente en Plataforma 5",
  username: "joaquinngaona@gmail.com",
  password: "1234",
  isVerified: true,

  profilePicture:
    "https://firebasestorage.googleapis.com/v0/b/efete-db5f7.appspot.com/o/images%2F39bee416-5730-4687-903e-6662cc17c7eb?alt=media&token=25cefabf-2274-47f7-85bf-d350dc40bd5a",
};

const charmander2 = {
  firstName: "Facundo",
  lastName: "Novaro",
  userJob: "Desarrollador Full Stack en Free Coders",
  username: "facundonovaro@gmail.com",
  password: "1234",
  isVerified: true,

  profilePicture:
    "https://firebasestorage.googleapis.com/v0/b/efete-db5f7.appspot.com/o/images%2F5f20822e756ef44b494aee0c-Palermo%2C%20Province%20of%20Palermo%2C%20Italy?alt=media&token=68eac075-1045-404d-af0a-eaa86971eba3",
};

User.insertMany([charmander, charmander2]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
