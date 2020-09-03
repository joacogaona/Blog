import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Login = ({
  username,
  password,
  userOk,
  passOk,
  handlePassword,
  handleSubmit,
  handleUsername,
  user,
}) => {
  return (
    <div className="loginContainer">
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="form">
          <div>
            <input
              className="input"
              onChange={handleUsername}
              type="text"
              placeholder="Correo electrónico"
              value={username}
            />
          </div>
          <div>
            <input
              className="input"
              onChange={handlePassword}
              type="password"
              placeholder="Contraseña"
              value={password}
            />
          </div>

          <button
            className="button"
            type="submit"
            disabled={!(userOk && passOk)}
          >
            Enviar
          </button>
        </form>
        <div>{user.message ? <p>{user.message}</p> : null}</div>
      </div>
    </div>
  );
};

export default Login;
