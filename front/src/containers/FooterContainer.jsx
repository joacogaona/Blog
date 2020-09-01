import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import { fetchCategories } from "../store/actions/categories";
import { registerUser } from "../store/actions/users";

export default ({ match }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userOk, setUserOk] = useState(false);
  const [firstNameOk, setFirstNameOk] = useState(false);
  const [lastNameOk, setLastNameOk] = useState(false);
  const [registerOk, setRegisterOk] = useState(false);
  const [password, setPassword] = useState("");
  const [passOk, setPassOk] = useState(false);

  const handleUsername = (e) => {
    const value = e.target.value.toLowerCase();
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setUsername(value);
    reg.test(value) ? setUserOk(true) : setUserOk(false);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    value.length > 0 ? setPassOk(true) : setPassOk(false);
  };
  const handleFirstName = (e) => {
    const value = e.target.value.toLowerCase();
    setFirstName(value);
    value.length > 0 ? setFirstNameOk(true) : setFirstNameOk(false);
  };
  const handleLastName = (e) => {
    const value = e.target.value.toLowerCase();
    setLastName(value);
    value.length > 0 ? setLastNameOk(true) : setLastNameOk(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(registerUser(firstName, lastName, username, password)).then(
      (data) => {
        if (data.user.message == "Register Ok") setRegisterOk(true);
      }
    );
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div>
      <Footer
        categories={categories}
        firstName={firstName}
        lastName={lastName}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        handleUsername={handleUsername}
        handleSubmit={handleSubmit}
        userOk={userOk}
        firstNameOk={firstNameOk}
        lastNameOk={lastNameOk}
        registerOk={registerOk}
        handlePassword={handlePassword}
        password={password}
        passOk={passOk}
      />
    </div>
  );
};
