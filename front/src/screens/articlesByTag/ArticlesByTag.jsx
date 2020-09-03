import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./style.css";

const ArticlesByTag = ({ articles, tag }) => {
  return (
    <div>
      <div>
        <Helmet>
          <title>
            JoacoGPrograma - Todo lo que tenés que saber sobre {tag}
          </title>
          <meta
            name="description"
            content={`Encontrá en esta sección de JoacoGPrograma muchísimos artículos sobre ${tag}. Te acompañamos en todo tu camino para ser programador`}
          />
          <meta name="robots" content="index,follow"></meta>
          <link rel="canonical" href={`http://localhost:3300/tag/${tag}`} />
        </Helmet>
      </div>
      {articles.length === 0 ? (
        <h1>No se encontró ningún artículo sobre {tag}</h1>
      ) : (
        <div className="card-container">
          {articles &&
            articles.map((article) => {
              return (
                <div className="card">
                  <Link
                    to={`/article/${article.articleURL}`}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      className="cardImage"
                      src={article.imageArticle}
                      alt="foto"
                    />

                    <div className="card-content">
                      <h3>{article.articleTitle}</h3>

                      <div className="authors-container">
                        {article.articleAuthor.map((author) => {
                          return (
                            <div className="author">
                              <img
                                className="avatar"
                                src="https://media.gettyimages.com/photos/punk-portrait-picture-id939681086?s=612x612"
                                alt="foto"
                              />

                              <p className="author-name">
                                {author.firstName} {author.lastName}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      <p className="cardInfo">{article.articleDescription}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default ArticlesByTag;
