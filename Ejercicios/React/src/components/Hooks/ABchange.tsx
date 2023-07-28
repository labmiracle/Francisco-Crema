import { useState } from "react";

function ABchange() {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value.replace("a", "b");
    setText(newText);
  };

  return (
    <>
      <hr />
      <h3>Ejercicio 1</h3>
      <input type="text" value={text} onChange={handleChange} />
      <hr />
    </>
  );
}

export default ABchange;
