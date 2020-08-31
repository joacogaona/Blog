import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
    <div>
      <Helmet>
        <meta name="robots" content="noindex,nofollow"></meta>
      </Helmet>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={handleTitle}
              type="text"
              placeholder="Título de la nota"
              value={title}
            />
          </div>
          <div>
            <input
              onChange={handleDescription}
              type="text"
              placeholder="Descripción"
              value={description}
            />
          </div>
          <div>
            <input
              onChange={handleMetaDescription}
              type="text"
              placeholder="Meta Description"
              value={metaDesc}
            />
          </div>
          <div>
            <textarea
              placeholder="Escribe el Contenido en HTML"
              value={content}
              onChange={handleContent}
              rows="40"
              cols="100"
            />
          </div>

          <div>
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
            type="text"
            placeholder="Elige los Tags de la lista"
            value={tag}
            disabled
          />
          <button
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
      <div>
        {tags.map((tag) => {
          return (
            <button
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
    </div>
  );
};

export default CreateArticle;
