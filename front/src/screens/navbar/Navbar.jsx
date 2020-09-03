import React from "react";
import { Link } from "react-router-dom";
import { Search, ExpandMore } from "@material-ui/icons";
import "./style.css";

const Navbar = ({
  categories,
  inputValue,
  disabled,
  handleChange,
  handleSubmitSearch,
  user,
  handleLogout,
  handleShowCategories,
  showCategories,
  tags,
}) => {
  return (
    <div className="container">
      <div className="violet">
        <div className="user">
          {user._id ? (
            <div className="userLogged">
              <div>
                <button onClick={handleLogout} className="logout">
                  <p className="userOption">Cerrar Sesión</p>
                </button>
              </div>
              {user.role === "admin" ? (
                <div>
                  <Link to="/admin/panel" className="userOption">
                    <p>Configuración</p>
                  </Link>
                </div>
              ) : null}
            </div>
          ) : (
            <Link to="/login" className="userOption">
              <p>Iniciar Sesión</p>
            </Link>
          )}
        </div>
      </div>
      <div className="searchContainer">
        <div className="brandNameContainer">
          <Link to="/articles" className="brandName">
            <p>JoacoGPrograma</p>
          </Link>
        </div>

        <div>
          <form onSubmit={handleSubmitSearch} className="searchForm">
            <div>
              <input
                className="inputSearch"
                onChange={handleChange}
                type="text"
                placeholder="Quiero buscar..."
                value={inputValue}
              />
            </div>
            <div>
              <Search type="submit" disabled={disabled} id="searchIcon" />
            </div>
          </form>
        </div>
        <div>
          <div onClick={handleShowCategories} className="dropdownContainer">
            <p className="categories">CATEGORIAS</p>
            <ExpandMore id="expandIcon" />
          </div>
          {showCategories ? (
            <div className="categoriesContainer">
              {categories &&
                categories.map((category) => {
                  return (
                    <Link id="singleCategory" to="/articles">
                      <p key={category._id} value={category.categoryTitle}>
                        {category.categoryTitle}
                      </p>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </div>
      </div>
      <div className="tagsContainer">
        {tags &&
          tags.map((tag) => {
            return (
              <Link to="/articles" className="singleTag">
                <p key={tag._id} value={tag.tagTitle}>
                  # {tag.tagTitle}
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Navbar;
