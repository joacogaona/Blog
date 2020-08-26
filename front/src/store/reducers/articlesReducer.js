import { GET_SINGLE_ARTICLE, GET_ARTICLES } from "../constants/constants";

const initialState = {
  article: {},
  articles: [],
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_ARTICLE:
      return { ...state, article: action.article };
    case GET_ARTICLES:
      return { ...state, articles: action.articles };

    default:
      return state;
  }
};

export default articlesReducer;
