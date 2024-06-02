import React from "react";
import "./style/PagLogin.css";
import KonectaCompany from "../img/KonectaCompany.png";

function PagLogin() {
  return (
    <div id="bodyLogin">
      <header>
      <img src={KonectaCompany} id="logo" />
      </header>
      <div id = 'cajaUsuario'>
        <h1 id = 'primerTitulo'>
          Inicio de sesion
        </h1> 
        <hr id='linea'/>
        <input type="text" id="cajaTextUser" placeholder="Documento de identidad" />
        <input type="password" id="cajaTextPass" placeholder="Contrasena" />
        <button id="botonIngresar">Ingresar</button>
        <a href="" id="linkContrasena">
          Has olvidado tu contrasena?
        </a>
        <a href="" id="linkRegistro">
          Aun no te has registrado?
        </a>
      </div>
    </div>
  );
}

export default PagLogin;
