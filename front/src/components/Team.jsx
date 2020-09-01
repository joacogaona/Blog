import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Team = () => {
  return (
    <div>
      <h1>Equipo</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <img src={`/${__dirname}/../back/public`} />
          <p>Joaquín Gaona</p>
          <p>Full Stack Developer - Youtuber - Administrador de Empresas</p>
          <p>"Alguna frase copada</p>
          <Link to="/github">
            <p>Github</p>
          </Link>
          <Link to="/linkedin">
            <p>Linkedin</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Team;
