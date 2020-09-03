import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

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
    <div className="footerContainer">
      {/* <div className="categories">
        {categories &&
          categories.map((category) => {
            return (
              <p key={category._id} value={category.categoryTitle}>
                {category.categoryTitle}
              </p>
            );
          })}
      </div> */}
      <div className="team">
        <h3>JoacoG Programa</h3>
        
         <div className='links'>
           <Link to="/team" className="linkText">
            Equipo
          </Link>
         <Link to="#" className="linkText">
            Instagram
          </Link>
        
         <Link to="#" className="linkText">
            Youtube
          </Link>
        
         </div>
        
      </div>
      {registerOk ? (
        <div >
          <h3>Tu usuario ha sido Registrado!</h3>
        </div>
      ) : (
        <div className='register'>
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
              style={{marginTop:10, width: '50%', color:'white'}}
                type="submit"
                disabled={!(userOk && firstNameOk && lastNameOk && passOk)}
              >
                <p > Enviar</p>
              </button>
            </div>
          </form>
          <div>
            <p>© 2020–2020 JoacoGP and Free Coders. <br/>
              All copirights reserved.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
