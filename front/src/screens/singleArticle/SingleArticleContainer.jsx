import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleArticle from "./SingleArticle";
import { fetchSingleArticle } from "../../store/actions/articles";

export default ({ match }) => {
  const article = useSelector((state) => state.articles.article);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleArticle(match.params.title));
  }, []);

  return (
    <div>
      <SingleArticle article={article} />
    </div>
  );
};
