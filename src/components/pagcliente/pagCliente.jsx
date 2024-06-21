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
  const [nombreApellido, setnombreApellido] = useState([]);
  const [cedulaID, setcedulaID] = useState([]);
  const [nacionalidad, setnacionalidad] = useState([]);
  const [estadoCivil, setestadoCivil] = useState([]);
  const [nacimiento, setnacimiento] = useState([]);
  const [numeroTf, setnumeroTf] = useState([]);
  const [email, setemail] = useState([]);
  const [direccion, setdireccion] = useState([]);
  const [profesion, setprofesion] = useState([]);
  const [titulo, settitulo] = useState([]);
  const [cole_uni, setcole_uni] = useState([]);
  const [cursos, setcursos] = useState([]);
  const [duracionCurso, setduracionCurso] = useState([]);
  const [instiCurso, setinstiCurso] = useState([]);
  const [cargoAntiTrabajo, setcargoAntiTrabajo] = useState([]);
  const [duracionTrabajoAnti, setduracionTrabajoAnti] = useState([]);
  const [sitioTrabajoAnti, setsitioTrabajoAnti] = useState([]);
  const [discapacidad, setdiscapacidad] = useState([]);
  const [disponibilidad, setdisponibilidad] = useState([]);
  const [cargoKonecta, setcargoKonecta] = useState([]);

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

  const cambiarValorNombreApellido = (valor) => {
    setnombreApellido(valor);
  };

  const cambiarValorCedulaID = (valor) => {
    setcedulaID(valor);
  };

  const cambiarValorNacionalidad = (valor) => {
    setnacionalidad(valor);
  };

  const cambiarValorEstadoCivil = (valor) => {
    setestadoCivil(valor);
  };

  const cambiarValorNacimiento = (valor) => {
    setnacimiento(valor);
  };

  const cambiarValorNumeroTf = (valor) => {
    setnumeroTf(valor);
  };

  const cambiarValorEmail = (valor) => {
    setemail(valor);
  };

  const cambiarValorDireccion = (valor) => {
    setdireccion(valor);
  };

  const cambiarValorProfesion = (valor) => {
    setprofesion(valor);
  };

  const cambiarValorTitulo = (valor) => {
    settitulo(valor);
  };

  const cambiarValorColeUni = (valor) => {
    setcole_uni(valor);
  };

  const cambiarValorCursos = (valor) => {
    setcursos(valor);
  };

  const cambiarValorDuracionCurso = (valor) => {
    setduracionCurso(valor);
  };

  const cambiarValorInstiCurso = (valor) => {
    setinstiCurso(valor);
  };

  const cambiarValorCargoAntiTrabajo = (valor) => {
    setcargoAntiTrabajo(valor);
  };

  const cambiarValorDuracionTrabajoAnti = (valor) => {
    setduracionTrabajoAnti(valor);
  };

  const cambiarValorSitioTrabajoAnti = (valor) => {
    setsitioTrabajoAnti(valor);
  };

  const cambiarValorDiscapacidad = (valor) => {
    setdiscapacidad(valor);
  };

  const cambiarValorDisponibilidad = (valor) => {
    setdisponibilidad(valor);
  };

  const cambiarValorCargoKonecta = (valor) => {
    setcargoKonecta(valor);
  };

  const botonAccion = (num) => {
    const datosCargo = { cargoAspirante: nombresChambas[num - 1] };
    fetch("http://127.0.0.1:5002/enviarAspirantes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosCargo),
    })
      .then((response) => response.json())
      .then((data) => {
        cambiarValorNombreApellido(data.nombres);
        cambiarValorCedulaID(data.cedulaID);
        cambiarValorNacionalidad(data.nacionalidad);
        cambiarValorEstadoCivil(data.estadoCivil);
        cambiarValorNacimiento(data.nacimiento);
        cambiarValorNumeroTf(data.numero);
        cambiarValorEmail(data.email);
        cambiarValorDireccion(data.direccion);
        cambiarValorProfesion(data.profesion);
        cambiarValorTitulo(data.titulo);
        cambiarValorColeUni(data["cole/uni"]); // Propiedad con '/' en el nombre
        cambiarValorCursos(data.cursos);
        cambiarValorDuracionCurso(data.duracionCurso);
        cambiarValorInstiCurso(data.institutoCurso);
        cambiarValorCargoAntiTrabajo(data.cargoAntiguoTrabajo);
        cambiarValorDuracionTrabajoAnti(data.duracionTrabajoAnti);
        cambiarValorSitioTrabajoAnti(data.sitioTrabajoAnti);
        cambiarValorDiscapacidad(data.discapacidad);
        cambiarValorDisponibilidad(data.disponibilidad);
        cambiarValorCargoKonecta(data.cargoKonecta);
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });

    setIndexComponente(num);
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
        cambiarValorInfoEmpresa(data.info);
        cambiarValorPermisoEjecutarFuncion(false);
      })
      .catch((error) => {
        document.write("error al recibir datos de la api, nombresChambas\n");
      });
  }

  if (permisoEjecutarFuncion === true) {
    getDatosChambasApi();
  }

  function intentar(){
    try {
      return Object.values(nombreApellido);
    } catch (error) {
      return "nose pudo";
    }
}
  return (
    <div id="MasterDiv">
      <section id="BarraLateral">
        <header id="EncabezadoBarraLateral">
          <img src={logoOne} id="ImagenLogoConectaK" />
          <h2 id="TituloKonectaClient">Konecta</h2>
        </header>
        <div id="ContenedorDeBotones">
          <button className="Botonnn" onClick={() => botonAccion(1)}>
            {nombresChambas[0]}
          </button>
          <button className="Botonnn" onClick={() => botonAccion(2)}>
            {nombresChambas[1]}
          </button>
          <button className="Botonnn" onClick={() => botonAccion(3)}>
            {nombresChambas[2]}
          </button>
          <button className="Botonnn" onClick={() => botonAccion(4)}>
            {nombresChambas[3]}
          </button>
          <button className="Botonnn" onClick={() => botonAccion(5)}>
            {nombresChambas[4]}
          </button>
          <button className="Botonnn" onClick={() => botonAccion(6)}>
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
          nombre={intentar()}
        />
      </section>
    </div>
  );
}
export default PagCliente;
