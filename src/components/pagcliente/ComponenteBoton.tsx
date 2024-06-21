import React from "react";
import "./style/ComponenteBoton.css";
import BotonesDinamicos from "./BotonesDinamicos";

interface ComponenteBoton {
  nombreDelTrabajo: [String, String, String, String, String, String];
  descripcionDelTrabajo: [String, String, String, String, String, String];
  requisitosTrabajo: [String, String, String, String, String, String];
  index: number;
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

function ComponenteBoton(props: ComponenteBoton) {
  const {
    nombreDelTrabajo,
    descripcionDelTrabajo,
    requisitosTrabajo,
    index,
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

  if (index === 1) {
    console.log(Cursos)
    return (
      <div className="div_central">
        <h1>{nombreDelTrabajo[0]}</h1>
        <hr />
        <p>{descripcionDelTrabajo[0]}</p>
        <hr />
        <p>{requisitosTrabajo[0]}</p>
        <BotonesDinamicos
          nombre={nombre}
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
        ></BotonesDinamicos>
      </div>
    );
  } else if (index === 2) {
    return (
      <div className="div_central">
        <h1>{nombreDelTrabajo[1]}</h1>
        <hr />
        <p>{descripcionDelTrabajo[1]}</p>
        <hr />
        <p>{requisitosTrabajo[1]}</p>
        <BotonesDinamicos
          nombre={nombre}
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
        ></BotonesDinamicos>
      </div>
    );
  } else if (index === 3) {
    return (
      <div className="div_central">
        <h1>{nombreDelTrabajo[2]}</h1>
        <hr />
        <p>{descripcionDelTrabajo[2]}</p>
        <hr />
        <p>{requisitosTrabajo[2]}</p>
        <BotonesDinamicos
          nombre={nombre}
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
        ></BotonesDinamicos>
      </div>
    );
  } else if (index === 4) {
    console.log(Cursos)
    return (
      <div className="div_central">
        <h1>{nombreDelTrabajo[3]}</h1>
        <hr />
        <p>{descripcionDelTrabajo[3]}</p>
        <hr />
        <p>{requisitosTrabajo[3]}</p>
        <BotonesDinamicos
          nombre={nombre}
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
        ></BotonesDinamicos>
      </div>
    );
  } else if (index === 5) {
    return (
      <div className="div_central">
        <h1>{nombreDelTrabajo[4]}</h1>
        <hr />
        <p>{descripcionDelTrabajo[4]}</p>
        <hr />
        <p>{requisitosTrabajo[4]}</p>
        <BotonesDinamicos
          nombre={nombre}
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
        ></BotonesDinamicos>
      </div>
    );
  } else if (index === 6) {
    return (
      <div className="div_central">
        <h1>{nombreDelTrabajo[5]}</h1>
        <hr />
        <p>{descripcionDelTrabajo[5]}</p>
        <hr />
        <p>{requisitosTrabajo[5]}</p>
        <BotonesDinamicos
          nombre={nombre}
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
        ></BotonesDinamicos>
      </div>
    );
  } else {
    return (
      <div className="div_central">
        <h1>no se renderiza nada we</h1>
      </div>
    );
  }
}

export default ComponenteBoton;
