/**
 * Ejemplo de usi del Hook useState
 *
 * Crear un componente de tipo funcion y acceder a su estado privado
 * a través de un hooks y además, poder modificarlo
 */

import React, { useState } from "react";

export const Ejemplo1 = () => {
  // Valor inicial para un contador
  const valorInicial = 0;

  // Valor inicial para una persona
  const personaInicial = {
    nombre: "Stiven",
    email: "stivenasegura@gmail.com",
  };

  /**
   * Queremos que VALORINICIAL y PERSONAINICIAL sean parte del estado del componente
   * para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente
   * 
   * const [nombreVariable, función para cambiar] = useState(valorInicial)
   */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  // Función para actualizar el estado privado que contiene el contador

  function incrementarContador() {
    // funcionParaCambiar(nuevoValor)
    setContador(contador + 1);
  }

  // Función para actualizar el estado de persona en el componente

  function actualizarPersona() {
    setPersona({
        nombre: "Jose",
        email: "joselito@example.com"
    })
  }

  return(
    <div>
        <h1>*** Ejemplo de useState() ***</h1>
        <hr />
        <h2>Contador: {contador}</h2>
        <h2>Datos de la persona:</h2>
        <h3>Nombre: {persona.nombre}</h3>
        <h4>Email: {persona.email}</h4>
        {/* Bloque de botones para actualizar el estado del componente */}
        <button onClick={incrementarContador}>Incrementar Contador</button>
        <button onClick={actualizarPersona}>Actualizar Persona</button>
    </div>
  )
};
