import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { loginUser } from "../../store/actions/users";

export default (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userOk, setUserOk] = useState(false);
  const [passOk, setPassOk] = useState(false);
  const user = useSelector((state) => state.users.user);

  const handleUsername = (e) => {
    const value = e.target.value;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setUsername(value);
    reg.test(value) ? setUserOk(true) : setUserOk(false);
  };
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    value.length > 0 ? setPassOk(true) : setPassOk(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(loginUser(username, password)).then((data) => {
      if (data.user._id) props.history.push("/articles");
    });
  };
  return (
    <div>
      <Login
        username={username}
        password={password}
        userOk={userOk}
        passOk={passOk}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
        handleUsername={handleUsername}
        user={user}
      />
    </div>
  );
};
