import { GET_CATEGORIES } from "../constants/constants";

const initialState = {
  categories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.categories };

    default:
      return state;
  }
};
