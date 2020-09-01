import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticlesByAuthor from "./ArtilesByAuthor";
import { fetchArticlesByAuthor } from "../../store/actions/articles";

export default ({ match }) => {
  const articles = useSelector((state) => state.articles.articles);
  const author = match.params.author;
  const [firstName, lastName] = author.split("-");

  const dispatch = useDispatch();

  useEffect(() => {
    if (author) dispatch(fetchArticlesByAuthor(author));
    else props.history.push("/articles");
  }, []);
  return (
    <div>
      <ArticlesByAuthor
        articles={articles}
        author={author}
        firstName={firstName.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })}
        lastName={lastName.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })}
      />
    </div>
  );
};
