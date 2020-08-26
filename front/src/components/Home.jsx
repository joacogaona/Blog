import React from "react";

const Home = ({ articles }) => {
  console.log(articles, "ARTICLES");
  return (
    <div>
      <h1>Aprendé a sobre tecnología</h1>
      {articles &&
        articles.map((article) => {
          return article;
        })}
    </div>
  );
};

export default Home;
