import axios from "axios";
import { GET_TAGS } from "../constants/constants";

const getTags = (tags) => {
  return {
    type: GET_TAGS,
    tags,
  };
};

export const fetchTags = () => (dispatch) => {
  return axios.get("/api/tags").then((res) => dispatch(getTags(res.data)));
};
