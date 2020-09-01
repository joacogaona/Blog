import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateArticle from "./CreateArticle";
import { createArticle } from "../../store/actions/articles";
import { fetchCategories } from "../../store/actions/categories";
import { fetchTags } from "../../store/actions/tags";

export default (props) => {
  const tags = useSelector((state) => state.tags.tags);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState([]);
  const [tagId, setTagId] = useState([]);
  const [tagOk, setTagOk] = useState(false);
  const [catOk, setCatOk] = useState(false);
  const [contentOk, setContentOk] = useState(false);
  const [metaDescOk, setMetaDescOk] = useState(false);
  const [titleOk, setTitleOk] = useState(false);
  const [descOk, setDescOk] = useState(false);
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
    console.log(id, "ID DEL TAG");
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
      createArticle(
        title,
        description,
        metaDesc,
        content,
        category,
        tagId,
        // user._id
        "5f497af893859a7b6a00db24"
      )
    ).then((data) => {
      if (data.article._id)
        props.history.push(`/article/${data.article.articleURL}`);
    });
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchTags());
  }, []);

  return (
    <div>
      <CreateArticle
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
