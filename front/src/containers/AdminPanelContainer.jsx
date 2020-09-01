import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminPanel from "../components/AdminPanel";
import { fetchArticles, deleteArticle } from "../store/actions/articles";

export default () => {
  const articles = useSelector((state) => state.articles.articles);
  const dispatch = useDispatch();

  const handleDeleteArticle = (articleId) => {
    confirm("Estas seguro que querés borrar este producto?");
    dispatch(deleteArticle(articleId));
  };

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <div>
      <AdminPanel
        articles={articles}
        handleDeleteArticle={handleDeleteArticle}
      />
    </div>
  );
};
