const Article = require("../models/articles");
require("../config/db");

const charmander = {
  articleTitle: "Articulo UNO",

  metaDescription:
    "UNO - Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable",

  articleDescription:
    " UNO - Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás",

  articleContent:
    " UNO -Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás. Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás",

  articleURL: "articulo-uno",

  articleAuthor: {
    _id: "5f45175fb5e2337549cd9989",
  },
  tags: {
    _id: "5f4517bcd6ec47758c5e9ee8",
  },
  categories: {
    _id: "5f4517ec6236d375b245a9c4",
  },
};

const bulbasaur = {
  articleTitle: "Articulo DOS",

  metaDescription:
    "DOS - Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable",

  articleDescription:
    "DOS -  Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás",

  articleContent:
    "DOS - Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás. Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás",
  articleURL: "articulo-dos",
  articleAuthor: {
    _id: "5f45175fb5e2337549cd9989",
  },
  tags: {
    _id: "5f4517bcd6ec47758c5e9ee9",
  },
  categories: {
    _id: "5f4517ec6236d375b245a9c7",
  },
};

const squirtle = {
  articleTitle: "Articulo TRES",

  metaDescription:
    "TRES - Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable",

  articleDescription:
    "TRES -  Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás",

  articleContent:
    "TRES - Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás. Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás",
  articleURL: "articulo-tres",
  articleAuthor: {
    _id: "5f45175fb5e2337549cd998a",
  },
  tags: {
    _id: "5f4517bcd6ec47758c5e9eea",
  },

  categories: {
    _id: "5f4517ec6236d375b245a9c5",
  },
};

Article.insertMany([charmander, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
