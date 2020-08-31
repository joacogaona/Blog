import { LOG_USER } from "../constants/constants";

const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER:
      return { ...state, user: action.user };

    default:
      return state;
  }
};
