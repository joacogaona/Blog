import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditArticle from "./EditArticle";
import { editArticle, fetchSingleArticle } from "../../store/actions/articles";
import { fetchCategories } from "../../store/actions/categories";
import { fetchTags } from "../../store/actions/tags";

export default ({ match, history }) => {
  const tags = useSelector((state) => state.tags.tags);
  const article = useSelector((state) => state.articles.article);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState([]);
  const [tagId, setTagId] = useState([]);
  const [tagOk, setTagOk] = useState(true);
  const [catOk, setCatOk] = useState(true);
  const [contentOk, setContentOk] = useState(true);
  const [metaDescOk, setMetaDescOk] = useState(true);
  const [titleOk, setTitleOk] = useState(true);
  const [descOk, setDescOk] = useState(true);
  const user = useSelector((state) => state.users.user);

  const categories = useSelector((state) => state.categories.categories);

  // Armar función para capitalizar cada palabra del título
  const handleTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
    value.length > 0 ? setTitleOk(true) : setTitleOk(false);
  };

  const handleDescription = (e) => {
    const value = e.target.value;
    setDescription(value);
    value.length > 0 ? setDescOk(true) : setDescOk(false);
  };

  const handleMetaDescription = (e) => {
    const value = e.target.value;
    setMetaDesc(value);
    value.length > 0 ? setMetaDescOk(true) : setMetaDescOk(false);
  };
  const handleContent = (e) => {
    const value = e.target.value;
    setContent(value);
    value.length > 0 ? setContentOk(true) : setContentOk(false);
  };
  const handleCategory = (e) => {
    const value = e.target.value;
    setCategory(value);
    value.length > 0 ? setCatOk(true) : setCatOk(false);
  };

  const handleTag = (tagTitle) => {
    tag.length <= 1 ? setTagOk(false) : setTagOk(true);
    if (tag.includes(tagTitle)) {
      const newTag = tag.filter((cat) => {
        if (cat !== tagTitle) {
          return cat;
        }
      });
      setTag(newTag);
    } else {
      setTag([...tag, tagTitle]);
      setTagOk(true);
    }
  };

  const handleTagId = (id) => {
    if (tagId.includes(id)) {
      const newTagId = tagId.filter((cat) => {
        if (cat !== id) {
          return cat;
        }
      });
      setTagId(newTagId);
    } else {
      setTagId([...tagId, id]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(
      editArticle(
        article._id,
        title,
        description,
        metaDesc,
        content,
        category,
        tagId
      )
    ).then((data) => {
      if (data.article._id) history.push(`/article/${data.article.articleURL}`);
    });
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchTags())
      .then(() => dispatch(fetchSingleArticle(match.params.title)))
      .then((data) => {
        const article = data.article;
        setTitle(article.articleTitle);
        setDescription(article.articleDescription);
        setMetaDesc(article.metaDescription);
        setContent(article.articleContent);
        setCategory(article.categories);
        article.tags.map((singleTag) => {
          setTag([...tag, singleTag.tagTitle]);
          setTagId([...tagId, singleTag._id]);
        });
      });
  }, []);

  return (
    <div>
      <EditArticle
        article={article}
        title={title}
        description={description}
        metaDesc={metaDesc}
        content={content}
        categories={categories}
        tag={tag}
        tagOk={tagOk}
        catOk={catOk}
        contentOk={contentOk}
        titleOk={titleOk}
        descOk={descOk}
        metaDescOk={metaDescOk}
        handleDescription={handleDescription}
        handleSubmit={handleSubmit}
        handleTitle={handleTitle}
        handleMetaDescription={handleMetaDescription}
        handleContent={handleContent}
        handleCategory={handleCategory}
        handleTag={handleTag}
        user={user}
        tags={tags}
        handleTagId={handleTagId}
      />
    </div>
  );
};
