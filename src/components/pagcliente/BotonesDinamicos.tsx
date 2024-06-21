import React from "react";
import { useState } from "react";
import {PanelCentral} from "./PanelCentral";
import "./style/BotonesDinamicos.css";

interface BotonesDinamicos {
  nombre: [];
  cedula: [];
  Nacionalidad: [];
  EstadoCivil: [];
  Nacimiento: [];
  NumeroTf: [];
  Email: [];
  Direccion: [];
  Profesion: [];
  Titulo: [];
  ColeUni: [];
  Cursos: [];
  DuracionCurso: [];
  InstiCurso: [];
  CargoAntiTrabajo: [];
  DuracionTrabajoAnti: [];
  SitioTrabajoAnti: [];
  Discapacidad: [];
  Disponibilidad: [];
  CargoKonecta: [];
}

function BotonesDinamicos(props: BotonesDinamicos) {
  const {
    nombre,
    cedula,
    Nacionalidad,
    EstadoCivil,
    Nacimiento,
    NumeroTf,
    Email,
    Direccion,
    Profesion,
    Titulo,
    ColeUni,
    Cursos,
    DuracionCurso,
    InstiCurso,
    CargoAntiTrabajo,
    DuracionTrabajoAnti,
    SitioTrabajoAnti,
    Discapacidad,
    Disponibilidad,
    CargoKonecta,
  } = props;
  const [valor, setValor] = useState(false);
  const [nombrePersona, setPersona] = useState(String);

  function cambiarValor(bool) {
    setValor(bool);
  }

  function renderizarSalir() {
    if (valor === true) {
      return (
        <button id="salir" onClick={() => cambiarValor(false)}>
          X
        </button>
      );
    }
  }

  try {
    return (
      <div id="Master">
        {renderizarSalir()}
        <PanelCentral boleano={valor}/>
        <div>
          {nombre.map((nombre, index) => (
            <button key={index} onClick={() => cambiarValor(true)}>
              {nombre}
            </button>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <h4>Este Cargo no Tienen Aspirantes</h4>;
  }
}
export default BotonesDinamicos;
