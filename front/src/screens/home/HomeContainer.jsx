import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import { fetchArticles } from "../../store/actions/articles";

export default () => {
  const articles = useSelector((state) => state.articles.articles.slice(1));
  const dispatch = useDispatch();
  const firstArticle = useSelector((state) => state.articles.articles[0]);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <div>
      <Home articles={articles} firstArticle={firstArticle} />
    </div>
  );
};
