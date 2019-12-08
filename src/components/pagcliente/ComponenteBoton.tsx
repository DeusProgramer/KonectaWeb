import React from "react";
import "./style/ComponenteBoton.css";

interface ComponenteBoton {
  nombreDelTrabajo: [String, String, String, String, String, String];
  descripcionDelTrabajo: [String, String, String, String, String, String];
  requisitosTrabajo: [String, String, String, String, String, String];
  index: number;
}
function ComponenteBoton(props: ComponenteBoton) {
  const { nombreDelTrabajo, descripcionDelTrabajo, requisitosTrabajo, index } = props;

  if (index === 1) {
    return (
      <>
        <p>{nombreDelTrabajo[0]}</p>
        <hr />
        <p>{descripcionDelTrabajo[0]}</p>
        <hr />
        <p>{requisitosTrabajo[0]}</p>
      </>
    );
  } else if (index === 2) {
    return (
      <>
        <p>{nombreDelTrabajo[1]}</p>
        <hr />
        <p>{descripcionDelTrabajo[1]}</p>
        <hr />
        <p>{requisitosTrabajo[1]}</p>
      </>
    );
  } else if (index === 3) {
    return (
      <>
        <p>{nombreDelTrabajo[2]}</p>
        <hr />
        <p>{descripcionDelTrabajo[2]}</p>
        <hr />
        <p>{requisitosTrabajo[2]}</p>
      </>
    );
  } else if (index === 4) {
    return (
      <>
        <p>{nombreDelTrabajo[3]}</p>
        <hr />
        <p>{descripcionDelTrabajo[3]}</p>
        <hr />
        <p>{requisitosTrabajo[3]}</p>
      </>
    );
  } else if (index === 5) {
    return (
      <>
        <p>{nombreDelTrabajo[4]}</p>
        <hr />
        <p>{descripcionDelTrabajo[4]}</p>
        <hr />
        <p>{requisitosTrabajo[4]}</p>
      </>
    );
  } else if (index === 6) {
    return (
      <>
        <p>{nombreDelTrabajo[5]}</p>
        <hr />
        <p>{descripcionDelTrabajo[5]}</p>
        <hr />
        <p>{requisitosTrabajo[5]}</p>
      </>
    );
  } else {
    return (
    <>
      <h1>no se renderiza nada we</h1>
    </>
    );
  }
}

export default ComponenteBoton;
