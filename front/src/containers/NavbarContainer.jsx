import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { fetchCategories } from "../store/actions/categories";
import { searchArticles } from "../store/actions/articles";

export default (props) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChange = (evt) => {
    const value = evt.target.value.toLowerCase();
    setInputValue(value);
    if (value.length > 0) {
      setDisabled(false);
    } else setDisabled(true);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    props.history.push(`/search/${inputValue.replace(/\s+/g, "-")}`);
    setDisabled(true);
    setInputValue("");
  };

  return (
    <div>
      <Navbar
        categories={categories}
        inputValue={inputValue}
        disabled={disabled}
        handleSubmitSearch={handleSubmitSearch}
        handleChange={handleChange}
      />
    </div>
  );
};
