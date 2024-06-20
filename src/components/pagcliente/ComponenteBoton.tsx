import React from "react";
import "./style/ComponenteBoton.css";

interface ComponenteBoton {
  nombreDelTrabajo: [String, String, String, String, String, String];
  descripcionDelTrabajo: [String, String, String, String, String, String];
  requisitosTrabajo: [String, String, String, String, String, String];
  index: number;
}
function ComponenteBoton(props: ComponenteBoton) {
  const { nombreDelTrabajo, descripcionDelTrabajo, requisitosTrabajo, index } =
    props;

  if (index === 1) {
    return (
      <div className="div_central">
        <p>{nombreDelTrabajo[0]}</p>
        <hr />
        <p>{descripcionDelTrabajo[0]}</p>
        <hr />
        <p>{requisitosTrabajo[0]}</p>
      </div>
    );
  } else if (index === 2) {
    return (
      <div className="div_central">
        <p>{nombreDelTrabajo[1]}</p>
        <hr />
        <p>{descripcionDelTrabajo[1]}</p>
        <hr />
        <p>{requisitosTrabajo[1]}</p>
      </div>
    );
  } else if (index === 3) {
    return (
      <div className="div_central">
        <p>{nombreDelTrabajo[2]}</p>
        <hr />
        <p>{descripcionDelTrabajo[2]}</p>
        <hr />
        <p>{requisitosTrabajo[2]}</p>
      </div>
    );
  } else if (index === 4) {
    return (
      <div className="div_central">
        <p>{nombreDelTrabajo[3]}</p>
        <hr />
        <p>{descripcionDelTrabajo[3]}</p>
        <hr />
        <p>{requisitosTrabajo[3]}</p>
      </div>
    );
  } else if (index === 5) {
    return (
      <div className="div_central">
        <p>{nombreDelTrabajo[4]}</p>
        <hr />
        <p>{descripcionDelTrabajo[4]}</p>
        <hr />
        <p>{requisitosTrabajo[4]}</p>
      </div>
    );
  } else if (index === 6) {
    return (
      <div className="div_central">
        <p>{nombreDelTrabajo[5]}</p>
        <hr />
        <p>{descripcionDelTrabajo[5]}</p>
        <hr />
        <p>{requisitosTrabajo[5]}</p>
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
