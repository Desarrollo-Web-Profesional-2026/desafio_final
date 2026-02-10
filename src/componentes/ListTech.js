//Desafio #2
import React from 'react';

function TechList() {
  const tecnologias = [
    { id: 1, nombre: 'React' },
    { id: 2, nombre: 'Node.js' },
    { id: 3, nombre: 'MongoDB' },
    { id: 4, nombre: 'Docker' }
  ];

  return (
    <div>
      <h2>Tecnologías aprendidas</h2>
      <ul>
        {tecnologias.map((tech) => (
          <li key={tech.id}>{tech.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default TechList;