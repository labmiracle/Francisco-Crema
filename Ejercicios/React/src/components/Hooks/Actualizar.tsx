import { useEffect, useState } from "react";

function Actualizar() {
  const [click, setClick] = useState(true);

  useEffect(() => {
    if (!click) {
      return console.log("Actualizado");
    }
  }, [click]);

  const handleUpdate = () => {
    setClick(!click);
  };

  return (
    <>
      <h3>Ejercicio 3</h3>
      <button onClick={handleUpdate}>Actualizar</button>
      <hr />
    </>
  );
}

export default Actualizar;
