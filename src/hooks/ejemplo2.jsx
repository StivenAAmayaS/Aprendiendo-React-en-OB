// Ejemplo de uso de:
// - useState()
// - useRef()
// - useEffect()

import React, { useState, useRef, useEffect } from "react";

export const Ejemplo2 = () => {
  // vamos a crear dos contadores distintos
  // cada uno en un estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // vamos a crear una referencia con useRef() para asociar una variable
  // con un elemento del DOM del componente (vista HTML)
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  // Trabajando con useEffect()

  // CASO 1: Ejecutar SIEMPRE un snippet de código
  // se ejecuta aquello que este dentro del useEffect()
  //   useEffect(() => {
  //     console.log("Cambio en el estado del COMPONENTE");
  //     console.log("Mostrando Referencia a elemento del DOM:");
  //     console.log(miRef);
  //   });

  // CASO 2: Ejecutar SOLO cuando cambie CONTADOR1
  // Cada vez que haya cambio en contador 1, se ejecuta lo que diga el useEffect()
  // en caso de que cambia contador 2, no habra ejecución
  //   useEffect(() => {
  //     console.log("Cambio en el estado del CONTADOR1");
  //     console.log("Mostrando Referencia a elemento del DOM:");
  //     console.log(miRef);
  //   }, [contador1]);

  // CASO 3:  Ejecutar SOLO cuando cambie CONTADOR1 ó CONTADOR2
  // Cada vez que haya cambio en contador 1, se ejecuta lo que diga el useEffect()
  // Cada vez que haya cambio en contador 2, se ejecuta lo que diga el useEffect()
  useEffect(() => {
    console.log("Cambio en el estado del CONTADOR 1 / CONTADOR 2");
    console.log("Mostrando Referencia a elemento del DOM:");
    console.log(miRef);
  }, [contador1, contador2]);

  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
      <hr />
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>

      {/* Botones para cambiar los contadores */}
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  );
};
