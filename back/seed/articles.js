const Article = require("../models/articles");
require("../config/db");

const charmander = {
  articleTitle: "Articulo SIETE",

  imageArticle:
    "https://firebasestorage.googleapis.com/v0/b/efete-db5f7.appspot.com/o/images%2F18cc22b8-702f-4ff5-9520-03f8a7c60674?alt=media&token=ec97943a-bdc3-4659-8942-3c748f493e34",

  metaDescription:
    "UNO - Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable",

  articleDescription:
    " Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable",

  articleContent:
    " UNO -Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás. Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás",

  articleURL: "articulo-siete",

  articleAuthor: [
    {
      _id: "5f45175fb5e2337549cd9989",
    },
    {
      _id: "5f4517bcd6ec47758c5e9eeb",
    },
  ],
  tags: [
    {
      _id: "5f4517bcd6ec47758c5e9ee8",
    },
    {
      _id: "5f4517bcd6ec47758c5e9ee9",
    },
  ],
  categories: {
    _id: "5f4517ec6236d375b245a9c4",
  },
};

const bulbasaur = {
  articleTitle: "Articulo DOS",

  imageArticle:
    "https://firebasestorage.googleapis.com/v0/b/efete-db5f7.appspot.com/o/images%2F18cc22b8-702f-4ff5-9520-03f8a7c60674?alt=media&token=ec97943a-bdc3-4659-8942-3c748f493e34",

  metaDescription:
    " Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable",

  articleDescription:
    "DOS -  Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable,",

  articleContent:
    "DOS - Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás. Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás",
  articleURL: "articulo-dos",
  articleAuthor: {
    _id: "5f45175fb5e2337549cd998a",
  },
  tags: {
    _id: "5f4517bcd6ec47758c5e9eea",
  },
  categories: {
    _id: "5f4517ec6236d375b245a9c6",
  },
};

const squirtle = {
  articleTitle: "Articulo TRES",

  imageArticle:
    "https://firebasestorage.googleapis.com/v0/b/efete-db5f7.appspot.com/o/images%2F18cc22b8-702f-4ff5-9520-03f8a7c60674?alt=media&token=ec97943a-bdc3-4659-8942-3c748f493e34",

  metaDescription:
    "TRES - Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable",
  articleDescription:
    " Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable",

  articleContent:
    "TRES - Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás. Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás.Javascript es tipado dinámico o dynamic typing: no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por sí mismo.Podemos tener una variable con un número y luego guardar una string en la misma variable .castear.Datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: (Inmutables.Puedo pisarlos por nuevos nomás",
  articleURL: "articulo-tres",
  articleAuthor: {
    _id: "5f45175fb5e2337549cd9989",
  },
  tags: {
    _id: "5f4517bcd6ec47758c5e9eeb",
  },

  categories: {
    _id: "5f4517ec6236d375b245a9c7",
  },
};

Article.insertMany([charmander, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
