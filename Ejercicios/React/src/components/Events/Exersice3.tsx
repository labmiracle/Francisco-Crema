import { useState, ChangeEvent } from "react";

function Exersice3() {
  const [selected, setSelected] = useState("");

  const selectOne = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <h3>Ejercicio 3</h3>
      <select value={selected} onChange={selectOne}>
        <option value="">Seleccionar una opcion</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <div>Seleccionaste: {selected}</div>
    </div>
  );
}

export default Exersice3;
