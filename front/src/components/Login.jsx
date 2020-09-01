import React from "react";
import { Link } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleUsername}
          type="text"
          placeholder="Correo electrónico"
          value={username}
        />
        <input
          onChange={handlePassword}
          type="password"
          placeholder="Contraseña"
          value={password}
        />
        <button type="submit" disabled={!(userOk && passOk)}>
          Enviar
        </button>
      </form>
      <div>{user.message ? <p>{user.message}</p> : null}</div>
    </div>
  );
};

export default Login;
