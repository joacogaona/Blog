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
  axios.get("/api/articles").then((res) => console.log(res.data, "RESDATA"));
};

export const fetchSingleArticle = (title) => (dispatch) =>
  axios
    .get(`/api/articles/${title}`)
    .then((res) => dispatch(getSingleArticle(res.data)));
