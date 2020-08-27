import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const SingleProduct = ({ article, handleSearchByTag }) => {
  return (
    <>
      <Helmet>
        <title>{article.articleTitle}</title>
        <meta name="description" content={`${article.metaDescription}`} />
        <link
          rel="canonical"
          href={`http://localhost:3300/article/${article.articleURL}`}
        />
      </Helmet>
      <div>
        <h1>{article.articleTitle}</h1>
        <p>ACA va la descripción</p>
        <img src={article.imageArticle} alt={article.articleURL} />
        <p>{article.articleContent}</p>
        {article.articleAuthor && article.articleAuthor.length > 1 ? (
          <p>Autores:</p>
        ) : (
          <p>Autor:</p>
        )}
        {article.articleAuthor &&
          article.articleAuthor.map((autor) => {
            return (
              <Link
                key={autor._id}
                to={`/author/${autor.firstName.toLowerCase()}-${autor.lastName.toLowerCase()}`}
              >
                <p>
                  {autor.firstName} {autor.lastName}
                </p>
              </Link>
            );
          })}
        <p>Tags: </p>
        {article.tags &&
          article.tags.map((tag) => {
            return (
              <Link
                key={tag._id}
                to={`/tag/${tag.tagTitle}`}
                onClick={() => handleSearchByTag(tag._id)}
              >
                <p>#{tag.tagTitle}</p>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default SingleProduct;
