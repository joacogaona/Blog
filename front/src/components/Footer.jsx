import React from "react";

const Footer = ({ categories }) => {
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
    </div>
  );
};

export default Footer;
