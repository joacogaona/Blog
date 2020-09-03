import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticlesByTag from "./ArticlesByTag";
import { fetchArticlesByTag } from "../../store/actions/articles";

export default ({ match }) => {
  const articles = useSelector((state) => state.articles.articles);
  const tag = match.params.tag;

  const dispatch = useDispatch();

  useEffect(() => {
    if (tag) dispatch(fetchArticlesByTag(tag));
    else props.history.push("/articles");
  }, [tag]);
  return (
    <div>
      <ArticlesByTag articles={articles} tag={tag} />
    </div>
  );
};
