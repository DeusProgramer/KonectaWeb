import React from "react";
import LogoOne from "../img/LogoOneBlack.png";
import Multimax_Store_Ca from '../img/Multimax Store C.A..png';
import "./style/pagCliente.css";

function PagCliente() {
  return (
    <div id="bodyCliente">
      <div id="barraLateral">
        <img src={LogoOne} alt="hola" id="imagenLogoKonecta" />
        <h2 id = "tituloKonectas">Konecta</h2>
      </div>
      {/*--------------------------------------------*/}
      <div id="panelCentral">
        <img src={Multimax_Store_Ca} id ="multimax" />
        <div id="panel">
          <h2 style={{paddingTop: "-150px"}}>
            Gestion de Empleos
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PagCliente;
