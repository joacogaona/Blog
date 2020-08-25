import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleArticle from "../components/SingleArticle";

export default () => {
  const article = useSelector((state) => state.articles.article);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleArticle(this.props.title));
  });

  return (
    <div>
      <SingleArticle article={article} />
    </div>
  );
};
