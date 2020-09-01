import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import img from "../../../../back/public/fotoJoacoGaona.jpeg";

const Team = () => {
  return (
    <div>
      <h1>Equipo</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <img src={`${img}`} />
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
