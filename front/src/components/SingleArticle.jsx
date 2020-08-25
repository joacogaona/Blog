import React from "react";
import { Helmet } from "react-helmet";

const SingleProduct = ({ article }) => {
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
        <p>
          Autor: {article.articleAuthor && article.articleAuthor[0].firstName}{" "}
          {article.articleAuthor && article.articleAuthor[0].lastName}
        </p>
        <p>Tags: </p>
        {article.tags &&
          article.tags.map((tag) => {
            return <p key={tag._id}>#{tag.tagTitle}</p>;
          })}
      </div>
    </>
  );
};

export default SingleProduct;
