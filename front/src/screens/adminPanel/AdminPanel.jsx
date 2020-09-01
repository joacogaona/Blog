import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AdminPanel = ({ articles, handleDeleteArticle }) => {
  return (
    <div>
      <div>
        <Helmet>
          <meta name="robots" content="noindex,nofollow"></meta>
        </Helmet>
      </div>
      <h1>Aprendé a sobre tecnología</h1>
      <Link to="/admin/create-article">
        <button>
          <p>Agregar Atrículo</p>
        </button>
      </Link>
      {articles &&
        articles.map((article) => {
          return (
            <div key={article._id}>
              <Link to={`/article/${article.articleURL}`}>
                <h2>{article.articleTitle}</h2>
              </Link>
              <Link to={`/admin/edit-article/${article.articleURL}`}>
                <button>
                  <p>Editar Artículo</p>
                </button>
              </Link>

              <button onClick={() => handleDeleteArticle(article._id)}>
                <p>Borrar Artículo</p>
              </button>
              <div>
                {article.tags.map((tag) => {
                  return <div key={tag._id}> {tag.tagTitle} </div>;
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AdminPanel;
