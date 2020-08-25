import React from "react";

const Navbar = ({ categories }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <img
          src="http://www.cantabriatic.com/wp-content/uploads/2015/11/javascript-shield-logo-300x169.png"
          style={{ width: "30%" }}
        />
      </div>
      <div>
        <h1>JOACO G PROGRAMA</h1>
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
        <form>
          <label htmlFor="fname">Buscar:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Quiero buscar..."
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
