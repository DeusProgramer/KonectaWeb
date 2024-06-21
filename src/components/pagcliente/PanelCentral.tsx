import React, { useState } from "react";
import "./style/PanelCentral.css";

interface PanelCentral {
  boleano: boolean;
  nombreIndex: string;
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

export const PanelCentral = (props: PanelCentral) => {
  const {
    boleano,
    nombreIndex,
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

  if (boleano === true) {
    return (
      <div className="panel">
        <h2>Datos del Aspirante</h2>
        <div id="infoPersonal">
          <p>Nombre: {nombre}</p>
          <p>Cédula: {cedula}</p>
          <p>Nacionalidad: {Nacionalidad}</p>
          <p>Estado Civil: {EstadoCivil}</p>
          <p>Fecha de Nacimiento: {Nacimiento}</p>
          <p>Número Telefónico: {NumeroTf}</p>
          <p>Email: {Email}</p>
          <p>Dirección: {Direccion}</p>
        </div>
        <div id="infoAcademica">
          <p>Profesión: {Profesion}</p>
          <p>Título: {Titulo}</p>
          <p>Colegio/Universidad: {ColeUni}</p>
          <p>Cursos: {Cursos}</p>
          <p>Duración del Curso: {DuracionCurso}</p>
          <p>Institución del Curso: {InstiCurso}</p>
        </div>
        <div id="infoLaboral">
          <p>Cargo en el Trabajo Anterior: {CargoAntiTrabajo}</p>
          <p>Duración del Trabajo Anterior: {DuracionTrabajoAnti}</p>
          <p>Sitio del Trabajo Anterior: {SitioTrabajoAnti}</p>
          <p>Discapacidad: {Discapacidad}</p>
          <p>Disponibilidad: {Disponibilidad}</p>
        </div>
      </div>
    );
  }
};
