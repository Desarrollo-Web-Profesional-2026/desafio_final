//Desafio #2
import React, { useState } from 'react';

function ToggleButton() {
  const [texto, setTexto] = useState('Presióname');

  const handleClick = () => {
    setTexto('¡Cambiado!');
  };

  return (
    <button onClick={handleClick}>
      {texto}
    </button>
  );
}

export default ToggleButton;