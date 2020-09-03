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
          <div className="first-title">
            <h2>ÚLTIMO TEMA DEL BLOG</h2>
          </div>
          <h5>{firstArticle && firstArticle.readingTime} minutos de lectura</h5>
          <h3>{firstArticle && firstArticle.articleTitle}</h3>

          <p className="first-article-info">
            {firstArticle && firstArticle.articleDescription}
          </p>

          <div className="first-article-authors-container">
            {firstArticle &&
              firstArticle.articleAuthor.map((author) => {
                return (
                  <div className="first-article-author">
                    <p className="first-article-author-name">
                      {author.firstName} {author.lastName}
                    </p>
                    <p className="first-article-author-job">{author.userJob}</p>
                  </div>
                );
              })}
          </div>
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
                            <div>
                              <p className="author-name">
                                {author.firstName} {author.lastName}
                              </p>
                            </div>
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
