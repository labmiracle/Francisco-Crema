import { useState, useEffect } from "react";

function Desmontar() {
  const [clik, setClik] = useState(true);

  useEffect(() => {
    if (!clik) {
      return console.log("Desmontado");
    }
  }, [clik]);

  const handleDesmontar = () => {
    setClik(!clik);
  };

  return (
    <>
      <h3>Ejercicio 2</h3>
      <button onClick={handleDesmontar}>Desmontar</button>
      <hr />
    </>
  );
}

export default Desmontar;
