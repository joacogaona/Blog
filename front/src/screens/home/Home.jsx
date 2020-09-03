import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import "./style.css";

const Home = ({ articles, firstArticle }) => {
  return (
    <>
      <div className="first-article">
        {/*  <Link
          to={`/article/${firstArticle.articleURL}`}
          style={{ textDecoration: "none" }}
        > */}

        <div className="first-article-content">
          <h3>{firstArticle && firstArticle.articleTitle}</h3>

          <div className="first-article-authors-container">
            {firstArticle &&
              firstArticle.articleAuthor.map((author) => {
                return (
                  <div className="first-article-author">
                    <img
                      className="first-article-avatar"
                      src="https://media.gettyimages.com/photos/punk-portrait-picture-id939681086?s=612x612"
                      alt="foto"
                    />

                    <p className="first-article-author-name">
                      {author.firstName} {author.lastName}
                    </p>
                  </div>
                );
              })}
          </div>

          <p className="first-article-info">
            {firstArticle && firstArticle.articleDescription}
          </p>
        </div>
        <img
          className="first-article-image"
          src={firstArticle && firstArticle.imageArticle}
          alt="foto"
        />
        {/*  </Link> */}
      </div>
      {/* ------------------------------------------------------------------------------------------------- */}
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
    </>
  );
};

export default Home;
