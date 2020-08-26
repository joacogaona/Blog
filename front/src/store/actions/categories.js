import axios from "axios";
import { GET_CATEGORIES } from "../constants/constants";

const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories,
  };
};

export const fetchCategories = () => (dispatch) =>
  axios.get(`/api/categories`).then((res) => dispatch(getCategories(res.data)));
