import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import { fetchArticles } from "../../store/actions/articles";

export default () => {
  const articles = useSelector((state) => state.articles.articles);
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
