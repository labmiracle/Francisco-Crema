import { useState } from "react";
import Buttons from "./Buttons";
import Text from "./Text";

function Ej3() {
  const [letra, setLetra] = useState("");
  const letraRandom = (): string => {
    const caracteres = "ALMNBCVIGWFGakamclovyetwbalacbayKLFDEP";
    const cualquierLetra = Math.floor(Math.random() * caracteres.length);
    return caracteres[cualquierLetra];
  };

  const agregarLetra = (): void => {
    setLetra(letra + letraRandom());
  };

  const sacarLetra = (): void => {
    setLetra(letra.slice(0, -1));
  };

  return (
    <>
      <br />
      <h3>Ejercicio 3</h3>
      <Text text={letra} />
      <Buttons accion={agregarLetra}>Agregar</Buttons>
      <Buttons accion={sacarLetra}>Sacar</Buttons>
    </>
  );
}

export default Ej3;
