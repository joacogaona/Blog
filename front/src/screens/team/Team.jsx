import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LinkedIn, GitHub } from "@material-ui/icons";

import img from "../../../../back/public/fotoJoacoGaona.jpeg";
import imgFacu from "../../../../back/public/fotoLinkedin.jpeg";
import "./style.css";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>JoacoGPrograma - Conocé a Nuestro Equipo</title>
        <meta
          name="description"
          content="Este es el equipo de joacoGPrograma trabajando para dar conocimiento a la comunidad de coders de habla hispana. Te acompañamos en tu camino para ser programador"
        />
        <meta name="robots" content="index,follow"></meta>
        <link rel="canonical" href={`http://localhost:3300/team`} />
      </Helmet>
      <div>
        <h1 className="title">Equipo</h1>
        <div className="teamContainer">
          <div className="teamMember">
            <div>
              <img src={`${img}`} className="img" />
            </div>
            <div>
              <p className="name">Joaquín Gaona</p>
              <p className="info">
                Full Stack Developer - Youtuber - Administrador de Empresas
              </p>
              <p className="info">"Alguna frase copada</p>
            </div>
            <div className="links">
              <Link to="https://github.com/joacogaona">
                <GitHub id="icon" />
              </Link>
              <Link to="https://www.linkedin.com/in/joaquingaona-fullstack/">
                <LinkedIn id="icon" />
              </Link>
            </div>
          </div>
          <div className="teamMember">
            <div>
              <img src={`${imgFacu}`} className="img" />
            </div>
            <div>
              <p className="name">Facundo Novaro Hueyo</p>
              <p className="info">
                Full Stack Developer - Ingeniero Industrial
              </p>
              <p className="info">"Alguna frase copada</p>
            </div>
            <div className="links">
              <Link to="https://github.com/facundonovaro">
                <GitHub id="icon" />
              </Link>
              <Link to="https://www.linkedin.com/in/facundonovaro/">
                <LinkedIn id="icon" />
              </Link>
            </div>
          </div>
          <div className="teamMember">
            <div>
              <img src={`${img}`} className="img" />
            </div>
            <div>
              <p className="name">Luciano Barone</p>
              <p className="info">
                Full Stack Developer - Youtuber - Administrador de Empresas
              </p>
              <p className="info">"Alguna frase copada</p>
            </div>
            <div className="links">
              <Link to="https://github.com/Lucianobarone">
                <GitHub id="icon" />
              </Link>
              <Link to="/https://www.linkedin.com/in/luciano-barone-29885b183/">
                <LinkedIn id="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
