import React from "react";
import { useState } from "react";
import { PanelCentral } from "./PanelCentral";
import "./style/BotonesDinamicos.css";

interface BotonesDinamicos {
  nombre: [String, String, String, String, String, String];
  cedula: [String, String, String, String, String, String];
  Nacionalidad: [String, String, String, String, String, String];
  EstadoCivil: [String, String, String, String, String, String];
  Nacimiento: [String, String, String, String, String, String];
  NumeroTf: [String, String, String, String, String, String];
  Email: [String, String, String, String, String, String];
  Direccion: [String, String, String, String, String, String];
  Profesion: [String, String, String, String, String, String];
  Titulo: [String, String, String, String, String, String];
  ColeUni: [String, String, String, String, String, String];
  Cursos: [String, String, String, String, String, String];
  DuracionCurso: [String, String, String, String, String, String];
  InstiCurso: [String, String, String, String, String, String];
  CargoAntiTrabajo: [String, String, String, String, String, String];
  DuracionTrabajoAnti: [String, String, String, String, String, String];
  SitioTrabajoAnti: [String, String, String, String, String, String];
  Discapacidad: [String, String, String, String, String, String];
  Disponibilidad: [String, String, String, String, String, String];
  CargoKonecta: [String, String, String, String, String, String];
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

  function cambiarValorIndex(indi) {
    setPersona(indi);
  }

  function accionBoton(bool, indi) {
    cambiarValor(bool);
    cambiarValorIndex(indi);
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
        <PanelCentral
          boleano={valor}
          nombreIndex={nombrePersona}
          nombre={(nombre)}
          cedula={cedula}
          Nacionalidad={Nacionalidad}
          EstadoCivil={EstadoCivil}
          Nacimiento={Nacimiento}
          NumeroTf={NumeroTf}
          Email={Email}
          Direccion={Direccion}
          Profesion={Profesion}
          Titulo={Titulo}
          ColeUni={ColeUni}
          Cursos={Cursos}
          DuracionCurso={DuracionCurso}
          InstiCurso={InstiCurso}
          CargoAntiTrabajo={CargoAntiTrabajo}
          DuracionTrabajoAnti={DuracionTrabajoAnti}
          SitioTrabajoAnti={SitioTrabajoAnti}
          Discapacidad={Discapacidad}
          Disponibilidad={Disponibilidad}
          CargoKonecta={CargoKonecta}
        />
        <div id = "divBotones">
          {nombre.map((nombre, index) => (
            <button key={index} onClick={() => accionBoton(true, index)}>
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
