import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
        <div>
          <h1>Artículos sobre {tag}</h1>
          {articles.map((article) => {
            return (
              <div key={article._id}>
                <Link to={`/article/${article.articleURL}`}>
                  <h2>{article.articleTitle}</h2>
                  <div>{article.articleDescription}</div>
                  <div>{article.articleContent}</div>
                  <div>
                    <img src={article.imageArticle} />
                  </div>
                </Link>
                <div>
                  {article.tags.map((tag) => {
                    return <div key={tag._id}> {tag.tagTitle} </div>;
                  })}
                </div>
                <div>
                  {article.articleAuthor.map((author) => {
                    return (
                      <div key={author._id}>
                        <div> {author.firstName} </div>
                        <div> {author.lastName} </div>
                        <div>
                          <img src={author.profilePicture} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ArticlesByTag;
