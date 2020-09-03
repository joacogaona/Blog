import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./style.css";

const CreateArticle = ({
  title,
  description,
  metaDesc,
  content,
  categories,
  tag,
  tagOk,
  catOk,
  contentOk,
  titleOk,
  descOk,
  metaDescOk,
  handleDescription,
  handleSubmit,
  handleTitle,
  handleMetaDescription,
  handleContent,
  handleCategory,
  handleTag,
  handleTagId,
  tags,
}) => {
  return (
    <div className="createArticleContainer">
      <Helmet>
        <meta name="robots" content="noindex,nofollow"></meta>
      </Helmet>
      <div className="createFormContainer">
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="inputCreate"
                onChange={handleTitle}
                type="text"
                placeholder="Título de la nota"
                value={title}
              />
            </div>
            <div>
              <input
                className="inputCreate"
                onChange={handleDescription}
                type="text"
                placeholder="Descripción"
                value={description}
              />
            </div>
            <div>
              <input
                className="inputCreate"
                onChange={handleMetaDescription}
                type="text"
                placeholder="Meta Description"
                value={metaDesc}
              />
            </div>
            <div>
              <textarea
                className="textArea"
                placeholder="Escribe el Contenido en HTML"
                value={content}
                onChange={handleContent}
              />
            </div>

            <div className="dropdownContainer">
              <label htmlFor="categories">Categorías</label>
              <select name="categories" id="categories">
                {categories &&
                  categories.map((category) => {
                    return (
                      <option
                        key={category._id}
                        value={category._id}
                        onClick={handleCategory}
                      >
                        {category.categoryTitle}
                      </option>
                    );
                  })}
              </select>
            </div>
            <input
              className="tagsCreate"
              type="text"
              placeholder="Elige los Tags de la lista"
              value={tag}
              disabled="true"
            />
            <div>
              {tags.map((tag) => {
                return (
                  <button
                    type="button"
                    key={tag._id}
                    value={tag.tagTitle}
                    onClick={() => {
                      handleTag(tag.tagTitle);
                      handleTagId(tag._id);
                    }}
                  >
                    {tag.tagTitle}
                  </button>
                );
              })}
            </div>
            <button
              className="buttonCreate"
              type="submit"
              disabled={
                !tagOk ||
                !catOk ||
                !contentOk ||
                !titleOk ||
                !descOk ||
                !metaDescOk
              }
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="contentContainer">
        <div
          className="content"
          contentEditable="true"
          dangerouslySetInnerHTML={{ __html: `${content}` }}
        ></div>
      </div>
    </div>
  );
};

export default CreateArticle;
