import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../components/Home";
import { fetchArticles } from "../store/actions/articles";

export default () => {
  const articles = useSelector((state) => state.articlesReducer.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <div>
      <Home articles={articles} />
    </div>
  );
};
