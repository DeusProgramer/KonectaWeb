import React from "react";
import { useState } from "react";
import "./style/PagLogin.css";
import KonectaCompany from "../img/KonectaCompany.png";

function PagLogin() {
  const [valorUsuario, setValorUsuario] = useState("");
  const [valorPassword, setValorPassword] = useState("");

  const getValorUsuario = (event) => {
    setValorUsuario(event.target.value);
  };

  const getValorPassword = (event) => {
    setValorPassword(event.target.value);
  };

  const getApi = () => {
    fetch("http://127.0.0.1:5002/result")
      .then((response) => response.json())
      .then((data) => {
        // console.log('Valor recibido de la API:', data.valor);
        var datoRecibido = data.valor;
        console.log("valor es :", datoRecibido);
      })
      .catch((error) => {
        console.error("Error al obtener el valor:", error);
      });
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
          alert("Acceso a la pagina autorizado");
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
        <button id="botonIngresar" onClick={accionBoton}>
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
