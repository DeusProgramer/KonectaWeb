import React, { useState } from "react";
import "./style/pagCliente.css";
import logoOne from "../img/logoOne.png";
import ComponenteBoton from "./ComponenteBoton";

function PagCliente() {
  const [infoEmpresa, setInfoEmpresa] = useState([]);
  const [nombresChambas, setNombresChambas] = useState([]);
  const [descripcionChambas, setDescripcionChambas] = useState([]);
  const [requisitosChambas, setRequisitosChambas] = useState([]);
  const [idChambas, setIdChambas] = useState([]);
  const [permisoEjecutarFuncion, setPermisoEjecutarFuncion] = useState(true);
  const [indexComponente, setIndexComponente] = useState(0);

  var indexx = 0;

  const cambiarValorInfoEmpresa = (arrays) => {
    setInfoEmpresa(arrays);
  };

  const cambiarValorNombresChambas = (arrays) => {
    setNombresChambas(arrays);
  };

  const cambiarValorDescripcionChambas = (arrays) => {
    setDescripcionChambas(arrays);
  };

  const cambiarValorRequisitosChambas = (arrays) => {
    setRequisitosChambas(arrays);
  };

  const cambiarValorIdChambas = (arrays) => {
    setIdChambas(arrays);
  };

  const cambiarValorPermisoEjecutarFuncion = (bool) => {
    setPermisoEjecutarFuncion(bool);
  };

  const boton1 = () => {
    setIndexComponente(1);
  };

  const boton2 = () => {
    setIndexComponente(2);
  };

  const boton3 = () => {
    setIndexComponente(3);
  };

  const boton4 = () => {
    setIndexComponente(4);
  };

  const boton5 = () => {
    setIndexComponente(5);
  };

  const boton6 = () => {
    setIndexComponente(6);
  };
  function getDatosChambasApi() {
    fetch("http://127.0.0.1:5002//cargosBaseDatos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        cambiarValorNombresChambas(data.nombre);
        cambiarValorDescripcionChambas(data.descripcion);
        cambiarValorRequisitosChambas(data.Requisitos);
        cambiarValorIdChambas(data.id);
        cambiarValorInfoEmpresa(data.info)
        cambiarValorPermisoEjecutarFuncion(false);
      })
      .catch((error) => {
        document.write("error al recibir datos de la api, nombresChambas\n");
      });
  }

  if (permisoEjecutarFuncion === true) {
    getDatosChambasApi();
  }else{
    console.log(infoEmpresa)
  }

  return (
    <div id="MasterDiv">
      <section id="BarraLateral">
        <header id="EncabezadoBarraLateral">
          <img src={logoOne} id="ImagenLogoConectaK" />
          <h2 id="TituloKonectaClient">Konecta</h2>
        </header>
        <div id="ContenedorDeBotones">
          <button className="Botonnn" onClick={boton1}>
            {nombresChambas[0]}
          </button>
          <button className="Botonnn" onClick={boton2}>
            {nombresChambas[1]}
          </button>
          <button className="Botonnn" onClick={boton3}>
            {nombresChambas[2]}
          </button>
          <button className="Botonnn" onClick={boton4}>
            {nombresChambas[3]}
          </button>
          <button className="Botonnn" onClick={boton5}>
            {nombresChambas[4]}
          </button>
          <button className="Botonnn" onClick={boton6}>
            {nombresChambas[5]}
          </button>
        </div>
      </section>
      {/* -------------------------- */}
      <section id="CampoCentral">
        <ComponenteBoton
          nombreDelTrabajo={nombresChambas}
          requisitosTrabajo={requisitosChambas}
          descripcionDelTrabajo={descripcionChambas}
          index={indexComponente}
        />
      </section>
    </div>
  );
}

export default PagCliente;
