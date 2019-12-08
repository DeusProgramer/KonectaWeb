import React from "react";
import { useState } from "react";
import "./style/PagLogin.css";
import KonectaCompany from "../img/KonectaCompany.png";
import { Navigate, useNavigate } from "react-router-dom";

function PagLogin() {
  const [valorUsuario, setValorUsuario] = useState("");
  const [valorPassword, setValorPassword] = useState("");

  const navv = useNavigate()

  const getValorUsuario = (event) => {
    setValorUsuario(event.target.value);
  };

  const getValorPassword = (event) => {
    setValorPassword(event.target.value);
  };
  // const setApi = () => {
  //   fetch("http://127.0.0.1:5002/enviar", {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(datosVariados),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Respuesta del servidor:', data.respuesta);
  //   })
  //   .catch(error => {
  //     console.error('Error al enviar datos:', error);
  //   });
  // };

  const setApi = () => {
    const datosVariados = { usuario: valorUsuario, password: valorPassword };

    fetch("http://127.0.0.1:5002/enviar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosVariados),
    })
      .then((response) => response.json())
      .then((data) => {
        var resultado = data.trueOrFalse;
        if (resultado === true){
          navv("/Cliente","option")
        }
        else{
          alert("Acceso a la pagina no autorizado");
        }
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });
  };

  const accionBoton = () => {
    setApi();
  };

  return (
    <div id="bodyLogin">
      <header>
        <img src={KonectaCompany} id="logoCompany" />
      </header>
      <div id="cajaUsuario">
        <h1 id="primerTitulo">Inicio de sesion</h1>
        <hr id="linea" />
        <input
          type="text"
          id="cajaTextUser"
          placeholder="Documento de identidad"
          value={valorUsuario}
          onChange={getValorUsuario}
        />
        <input
          type="password"
          id="cajaTextPass"
          placeholder="Contrasena"
          value={valorPassword}
          onChange={getValorPassword}
        />
        <button id="botonIngresar" onClick={accionBoton} Link="/Cliente">
          Ingresar
        </button>
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
