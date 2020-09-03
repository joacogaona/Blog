import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import IconoLupa from "@material-ui/icons/Search";
import "./style.css";
const SingleArticle = ({ article, handleSearchByTag }) => {
  return (
    <>
      <Helmet>
        <title>{article.articleTitle}</title>
        <meta name="description" content={`${article.metaDescription}`} />
        <meta name="robots" content="index,follow"></meta>
        <link
          rel="canonical"
          href={`http://localhost:3300/article/${article.articleURL}`}
        />
      </Helmet>

      <div>
        <p className="title">{article.articleTitle}</p>
        <div className="banner">
          <img
            style={{ width: "100%" }}
            src="https://i1.wp.com/xiaomiuniverse.com/wp-content/uploads/2017/12/aprender-react.jpeg?fit=1024%2C341&ssl=1"
            alt="ImagenBlog"
          />
        </div>

        <div
          className="content"
          contentEditable="true"
          dangerouslySetInnerHTML={{ __html: `${article.articleContent}` }}
        ></div>
        {article.articleAuthor && article.articleAuthor.length > 1 ? (
          <p className="autor">Autores:</p>
        ) : (
          <div>
            <p className="autor">Autor:</p>
            <p className="autorName">Joaco Gaona</p>
          </div>
        )}
        {article.articleAuthor &&
          article.articleAuthor.map((autor) => {
            return (
              <Link
                key={autor._id}
                to={`/author/${autor.firstName.toLowerCase()}-${autor.lastName.toLowerCase()}`}
              >
                <p className="autorName">
                  {autor.firstName} {autor.lastName}
                </p>
              </Link>
            );
          })}

        <div style={{ marginTop: 80 }}>
          <div className="searchMore">
            <p className="searchMoreText">Qué leer a continuación </p>
            <IconoLupa className="lupa" />
          </div>
          <hr style={{ marginRight: "10%", marginLeft: "10%" }} />
          <div className="searchMoreImages">
            <div className="searchMoreImageContainer">
              <img
                className="searchMoreImage"
                src="https://desarrolloweb.com/storage/serie_images/javascript.png"
                alt=""
              />
              <p className="searchMoreImageText">Javascript</p>
            </div>

            <div className="searchMoreImageContainer">
              <img
                className="searchMoreImage"
                src="https://careerkarma.com/blog/wp-content/uploads/2019/05/bootcamp-101-what-is-coding-bootcamp.png"
                alt=""
              />
              <p className="searchMoreImageText">Que es un Coding Bootcamp</p>
            </div>

            <div className="searchMoreImageContainer">
              <img
                className="searchMoreImage"
                src="https://cdn.swapps.com/uploads/2018/03/webpack-1280x720.jpg"
                alt=""
              />
              <p className="searchMoreImageText">Todo sobre Webpack</p>
            </div>
          </div>

          <hr style={{ marginRight: "10%", marginLeft: "10%" }} />
        </div>

        {article.tags &&
          article.tags.map((tag) => {
            return (
              <div className="tags">
                <Link className="tag" key={tag._id} to={`/tag/${tag.tagTitle}`}>
                  <p>#{tag.tagTitle}</p>
                </Link>
              </div>
            );
          })}
        <div className="tags">
          <a className="tag">
            <p>Programacion</p>
          </a>
          <a className="tag">
            <p>Diseño</p>
          </a>
          <a className="tag">
            <p>Otros</p>
          </a>
          <a className="tag">
            <p>Negocio</p>
          </a>
        </div>

        <div className="suscriptionContainer">
          <p style={{ color: "black", fontSize: 30 }}>
            Suscríbete a JoacoGPrograma
          </p>
          <p style={{ color: "#738A94", fontSize: 18, marginTop: -15 }}>
            Recibe los últimos artículos directamente en tu correo
          </p>
          <input type="text" style={{ width: "50%", height: 20 }} />{" "}
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              height: 26,
              border: "none",
            }}
          >
            Suscribete
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
