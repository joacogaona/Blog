import React from "react";
import { Link } from "react-router-dom";

const Footer = ({
  categories,
  firstName,
  lastName,
  username,
  handleFirstName,
  handleLastName,
  handleSubmit,
  handleUsername,
  userOk,
  firstNameOk,
  lastNameOk,
  registerOk,
  passOk,
  password,
  handlePassword,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        {categories &&
          categories.map((category) => {
            return (
              <option key={category._id} value={category.categoryTitle}>
                {category.categoryTitle}
              </option>
            );
          })}
      </div>
      <div>
        <h3>JoacoG Programa</h3>
        <div>
          <Link to="/team">
            <p>Equipo</p>
          </Link>
        </div>
      </div>
      {registerOk ? (
        <div>
          <h3>Tu usuario ha sido Registrado!</h3>
        </div>
      ) : (
        <div>
          <h3>Registrate y Suscribite a Nuestro Newsletter</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                value={firstName}
                onChange={handleFirstName}
                placeholder="Nombre"
              />
            </div>
            <div>
              <input
                value={lastName}
                onChange={handleLastName}
                placeholder="Apellido"
              />
            </div>
            <div>
              <input
                value={username}
                onChange={handleUsername}
                placeholder="Correo Electrónico"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={handlePassword}
                placeholder="Contraseña"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={!(userOk && firstNameOk && lastNameOk && passOk)}
              >
                {" "}
                <p>Enviar</p>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Footer;
