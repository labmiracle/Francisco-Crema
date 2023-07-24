import { useRef } from "react";
function Refs() {
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const input1Value = input1Ref.current?.value;
    const input2Value = input2Ref.current?.value;
    console.log("Mensaje del Input 1:", input1Value);
    console.log("Mensaje del Input 2:", input2Value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Mensaje 1:</label>
        <input type="text" id="input1" ref={input1Ref} />
      </div>
      <div>
        <label>Mensaje 2:</label>
        <input type="text" id="input2" ref={input2Ref} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Refs;
