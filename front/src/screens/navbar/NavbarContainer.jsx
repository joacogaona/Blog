import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { fetchCategories } from "../../store/actions/categories";
import { fetchTags } from "../../store/actions/tags";
import { logOut } from "../../store/actions/users";

export default (props) => {
  const categories = useSelector((state) => state.categories.categories);
  const user = useSelector((state) => state.users.user);
  const tags = useSelector((state) => state.tags.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchTags());
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [showCategories, setShowCategories] = useState(false);

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

  const handleLogout = () => {
    dispatch(logOut(user.username, user.password));
  };

  const handleShowCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div>
      <Navbar
        categories={categories}
        inputValue={inputValue}
        disabled={disabled}
        handleSubmitSearch={handleSubmitSearch}
        handleChange={handleChange}
        user={user}
        handleLogout={handleLogout}
        handleShowCategories={handleShowCategories}
        showCategories={showCategories}
        tags={tags}
      />
    </div>
  );
};
