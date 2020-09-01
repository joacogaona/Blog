import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = ({
  categories,
  inputValue,
  disabled,
  handleChange,
  handleSubmitSearch,
  user,
  handleLogout,
}) => {
  return (
    <div className="container">
      <div className="violet"></div>
      <div className="searchContainer">
        <div className="brandNameContainer">
          <h1 className="brandName">JoacoGPrograma</h1>
        </div>
        <div>
          <label htmlFor="categories">Categorías</label>
          <select name="cars" id="categories">
            {categories &&
              categories.map((category) => {
                return (
                  <option key={category._id} value={category.categoryTitle}>
                    {category.categoryTitle}
                  </option>
                );
              })}
          </select>
        </div>
        <div>
          <form onSubmit={handleSubmitSearch}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Quiero buscar..."
              value={inputValue}
            />
            <button type="submit" disabled={disabled}>
              Buscar
            </button>
          </form>
        </div>
      </div>

      <div>
        {user._id ? (
          <div>
            <Link to="/articles" onClick={handleLogout}>
              <p>Cerrar Sesión</p>
            </Link>
            {user.role === "admin" ? (
              <Link to="/admin/panel">
                <p>Configuración</p>
              </Link>
            ) : null}
          </div>
        ) : (
          <Link to="/login">
            <p>Iniciar Sesión</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
