import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  articles: articlesReducer,
  categories: categoriesReducer,
});
