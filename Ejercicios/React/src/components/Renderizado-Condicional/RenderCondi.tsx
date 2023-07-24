import { useState } from "react";

function RenderCondi() {
  const [isLooanding, setIsLooanding] = useState(true);

  const longIn = () => {
    setIsLooanding(true);
  };

  const longOut = () => {
    setIsLooanding(false);
  };

  return (
    <div>
      {isLooanding ? (
        <>
          <p>Esta página solo puedo verla por que estoy logueado</p>
          <button onClick={longOut}>Log Out</button>
        </>
      ) : (
        <div>
          <p>Inicia sesión para ver contenido privado</p>
          <button onClick={longIn}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default RenderCondi;
