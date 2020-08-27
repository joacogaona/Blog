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
  axios.get("/api/articles").then((res) => dispatch(getArticles(res.data)));
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
