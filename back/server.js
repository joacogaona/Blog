const express = require("express");
const app = express();
const db = require("./config/db");
const path = require("path");
const morgan = require("morgan");
const router = require("./routes/index");

app.use(express.static(path.join(__dirname, "/public")));

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded());

app.use("/api", router);

//VIEW
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//ERROR MIDDLEWARE
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

//SERVER

app.listen(3300, console.log("Escuchando el puerto 3300"));

module.exports = app;
