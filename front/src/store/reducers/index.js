import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import categoriesReducer from "./categoriesReducer";
import usersReducer from "./usersReducer";
import tagsReducer from "./tagsReducer";

export default combineReducers({
  articles: articlesReducer,
  categories: categoriesReducer,
  users: usersReducer,
  tags: tagsReducer,
});
