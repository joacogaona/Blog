import { GET_SINGLE_ARTICLE } from "../constants/constants";

const initialState = {
  article: {},
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_ARTICLE:
      return { ...state, article: action.article };

    default:
      return state;
  }
};

export default articlesReducer;
