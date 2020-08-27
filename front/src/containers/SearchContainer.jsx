import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Search";
import { searchArticles } from "../store/actions/articles";

export default ({ match }, props) => {
  const articles = useSelector((state) => state.articles.articles);
  const dispatch = useDispatch();

  const query = match.params.query;

  useEffect(() => {
    dispatch(
      searchArticles(query.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    );
  }, []);

  return (
    <div>
      <Search articles={articles} query={query} />
    </div>
  );
};
