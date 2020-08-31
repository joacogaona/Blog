import React from "react";
import { Link } from "react-router-dom";

const Home = ({ articles }) => {
  return (
    <div>
      <h1>Aprendé a sobre tecnología</h1>
      {articles &&
        articles.map((article) => {
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
                      {/* <div>
                        <img src={author.profilePicture} />
                      </div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
