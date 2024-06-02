import React from "react";
import "./style/FirstPageStyle.css";
import logoOne from "../img/logoOne.png";
import KonectaCompany from "../img/KonectaCompany.png";

function FirstPage() {
  return (
    <div id="body">
      {/* -------------------------- */}
      <header id="encabezado">
        <img src={logoOne} id="logo" />
        <h2 id="tituloE">Konecta</h2>
        <div id="contenedorEnlaces">
          <a href="" className="enlaces">
            Inicio
          </a>
          <a href="" className="enlaces">
            Servicios
          </a>
          <a href="" className="enlaces">
            Clientes
          </a>
        </div>
      </header>
      {/* -------------------------- */}
      <div id="primerElemento">
        <h2>Facilitamos tu búsqueda, ampliamos tus posibilidades</h2>
        <p className="parrafoIni">
          En Konecta, nos dedicamos a transformar la manera en que las empresas
          manejan el proceso de contratación. Nuestra plataforma web está
          diseñada para ofrecer una solución integral que permite publicar
          vacantes y gestionar candidatos.
        </p>
        <h4>Encuentra Tu Próxima Oportunidad con Konecta </h4>
        <p className="parrafoIni">
          facilitamos tu búsqueda de empleo conectándote con las mejores
          oportunidades en empresas líderes. Nuestra plataforma intuitiva te
          permite crear y enviar tu currículum de manera rápida y sencilla.
        </p>
        <button className="botones">Buscar Empleo</button>
        <button className="botones">Gestion de Empleos</button>
      </div>
      <div id="segundoElemento">
        <img src={KonectaCompany} id="companyLogo" />
        <h1 id="tituloIA"> + IA </h1>
        <h2 id="tituloIA2">
          Potencia tu Contratación con Inteligencia Artificial
        </h2>
        <p id="textoIa">
          llevamos la selección de personal al siguiente nivel mediante el uso
          de inteligencia artificial avanzada. Nuestra IA analiza de manera
          eficiente cada solicitud de empleo, identificando a los candidatos más
          adecuados según los criterios específicos de tu empresa. Este proceso
          no solo ahorra tiempo y reduce el esfuerzo manual, sino que también
          aumenta la precisión en la selección, asegurando que siempre
          encuentres al mejor talento disponible. Con Konecta, transforma tu
          proceso de contratación en una experiencia rápida, inteligente y
          altamente efectiva.
        </p>
      </div>
      {/* -------------------------- */}
      <footer id="piedepagina">
        <div>
          <h5 id="h5">Contactos</h5>
          <a className="enlacesF" href="">
            konectaCompany@gmail.com
          </a>
          <a className="enlacesF" href="">
            WhattApp
          </a>
          <a className="enlacesF" href="">
            Instagram
          </a>
          <a className="enlacesF" href="">
            Twitter
          </a>
          <a className="enlacesF" href="">
            GitHub
          </a>
          <img
            src={KonectaCompany}
            style={{ width: "85px", paddingLeft: "1%" }}
          />
        </div>
      </footer>
    </div>
  );
}

export default FirstPage;
