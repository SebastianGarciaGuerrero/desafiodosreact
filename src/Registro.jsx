import React from 'react';
import Formulario from './components/Formulario';
import SocialButton from './components/SocialButton';

const Registro = () => {
  return (
    <div className="cardContainer">  
      <h2 className="titulo">Crea una Cuenta</h2>
      <div className="iconContainer">
      <SocialButton className="socialButton" iconClass="fab fa-facebook" />
      <SocialButton className="socialButton" iconClass="fab fa-github" />
      <SocialButton className="socialButton" iconClass="fab fa-linkedin" />
      </div>
      <p className="sugerencia">O usa tu email para registrate</p> 
      <div className="formularioContainer">
      <Formulario />
      </div> 
    </div>
  );
};

export default Registro;
