import axios from "axios";
import { LOG_USER } from "../constants/constants";

const logUser = (user) => {
  return {
    type: LOG_USER,
    user,
  };
};

export const loginUser = (username, password) => (dispatch) => {
  return axios
    .post("/api/users/login", {
      username: username,
      password: password,
    })
    .then((res) => {
      return dispatch(logUser(res.data));
    })
    .catch(() =>
      dispatch(
        logUser({ message: "El usuario y/o la contraseña son inválidos" })
      )
    );
};

export const logOut = () => (dispatch) =>
  axios
    .post("/api/users/logout", {
      username: username,
      password: password,
    })
    .then(() => dispatch(logUser({})));

export const cookieLogger = () => (dispatch) =>
  axios.get("/api/users/cookieuser").then((res) => {
    dispatch(loginUser(res.data));
  });
