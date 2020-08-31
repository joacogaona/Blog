import axios from "axios";
import { GET_SINGLE_ARTICLE, GET_ARTICLES } from "../constants/constants";

const getSingleArticle = (article) => {
  return {
    type: GET_SINGLE_ARTICLE,
    article,
  };
};

const getArticles = (articles) => {
  return {
    type: GET_ARTICLES,
    articles,
  };
};

export const fetchArticles = () => (dispatch) => {
  return axios
    .get("/api/articles")
    .then((res) => dispatch(getArticles(res.data)));
};

export const fetchSingleArticle = (title) => (dispatch) =>
  axios
    .get(`/api/articles/${title}`)
    .then((res) => dispatch(getSingleArticle(res.data)));

export const searchArticles = (query) => (dispatch) =>
  axios.get(`/api/articles/search?query=${query}`).then((res) => {
    return dispatch(getArticles(res.data));
  });

export const fetchArticlesByTag = (tag) => (dispatch) =>
  axios.get(`/api/articles/tag/${tag}`).then((res) => {
    return dispatch(getArticles(res.data));
  });

export const fetchArticlesByAuthor = (author) => (dispatch) =>
  axios.get(`/api/articles/author/${author}`).then((res) => {
    return dispatch(getArticles(res.data));
  });
export const createArticle = (
  title,
  description,
  metaDesc,
  content,
  category,
  tag,
  userId
) => (dispatch) =>
  axios
    .post(`/api/articles/create`, {
      articleTitle: title,
      metaDescription: metaDesc,
      articleDescription: description,
      articleContent: content,
      categories: category,
      tags: tag,
      articleAuthor: userId,
    })
    .then((res) => {
      return dispatch(getSingleArticle(res.data));
    });

export const editArticle = (
  id,
  title,
  description,
  metaDesc,
  content,
  category,
  tag
) => (dispatch) =>
  axios
    .patch(`/api/articles/edit`, {
      _id: id,
      articleTitle: title,
      metaDescription: metaDesc,
      articleDescription: description,
      articleContent: content,
      categories: category,
      tags: tag,
    })
    .then((res) => dispatch(getSingleArticle(res.data)));
