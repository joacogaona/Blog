import axios from "axios";
import { GET_SINGLE_ARTICLE } from "../constants/constants";

const getSingleArticle = (article) => {
  return {
    type: GET_SINGLE_ARTICLE,
    article,
  };
};

export const fetchSingleArticle = (title) => (dispatch) =>
  axios
    .get(`/api/articles/${title}`)
    .then((res) => dispatch(getSingleArticle(res.data)));
