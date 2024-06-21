import React, { useState } from "react";
import "./style/PanelCentral.css";

interface PanelCentral {
  boleano: boolean;
  nombreIndex: string;
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

  const [valor, setValor] = useState(false);
  function enviarCorreo(email) {
    const json = { correo: email };
    fetch("http://127.0.0.1:5002/enviarCorreo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.variable) {
          alert("se envio");
        } else {
          alert("error no se envio");
        }
      })
      .catch((error) => {
        document.write("error al recibir datos de la api, nombresChambas\n");
      });
  }

  if (boleano === true) {
    console.log(cedula[nombreIndex]);
    return (
      <div className="panel">
        <h2>Datos del Aspirante</h2>
        <div id="infoPersonal">
          <p>Nombre: {nombre[nombreIndex]}</p>
          <p>Cédula: {cedula[nombreIndex]}</p>
          <p>Nacionalidad: {Nacionalidad}</p>
          <p>Estado Civil: {EstadoCivil[nombreIndex]}</p>
          <p>Fecha de Nacimiento: {Nacimiento[nombreIndex]}</p>
          <p>Número Telefónico: {NumeroTf[nombreIndex]}</p>
          <p>Email: {Email[nombreIndex]}</p>
          <p>Dirección: {Direccion[nombreIndex]}</p>
        </div>
        <div id="infoAcademica">
          <p>Profesión: {Profesion[nombreIndex]}</p>
          <p>Título: {Titulo[nombreIndex]}</p>
          <p>Colegio/Universidad: {ColeUni[nombreIndex]}</p>
          <p>Cursos: {Cursos}</p>
          <p>Duración del Curso: {DuracionCurso[nombreIndex]}</p>
          <p>Institución del Curso: {InstiCurso[nombreIndex]}</p>
        </div>
        <div id="infoLaboral">
          <p>Cargo en el Trabajo Anterior: {CargoAntiTrabajo[nombreIndex]}</p>
          <p>
            Duración del Trabajo Anterior: {DuracionTrabajoAnti[nombreIndex]}
          </p>
          <p>Sitio del Trabajo Anterior: {SitioTrabajoAnti[nombreIndex]}</p>
          <p>Discapacidad: {Discapacidad[nombreIndex]}</p>
          <p>Disponibilidad: {Disponibilidad[nombreIndex]}</p>
        </div>
        <button onClick={() => enviarCorreo(Email[nombreIndex])}>Enviar Solicitud de Empleo</button>
      </div>
    );
  }
};
