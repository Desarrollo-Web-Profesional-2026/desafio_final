import React, { useState } from 'react';

function CounterButton() {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Contador de clics</h2>
      <button onClick={handleClick}>
        Has hecho clic {contador} veces
      </button>
    </div>
  );
}

export default CounterButton;