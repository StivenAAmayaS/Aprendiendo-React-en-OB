/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from "react";

/**
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null);

const Componente1 = () => {
  const state = useContext(miContexto);

  // Inicializamos un estado vacio que va a rellenarse con los datos del padre
  return (
    <div>
      <h1>El Token es: {state.token}</h1>
      {/* Pintamos el componente 2 */}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesión es: {state.sesion}</h2>
    </div>
  );
};

export default function MiComponenteContexto() {
  const estadoInicial = {
    token: "123456789",
    sesion: 1,
  };

  // Creamos el estado de esta componente
  const [sesionData, setSesionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSesionData({
      token: "asdfg123456",
      sesion: sesionData.sesion + 1,
    });
  }

  return (
    <div>
      <miContexto.Provider value={sesionData}>
        {/* Todo lo que esta aqui dentro puede leer los datos de sesionData */}
        {/* Además si se actualiza, los componentes de aqui, tambien lo actualizan */}
        <h1>*** Ejemplo de useState() y useContext() ***</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesión</button>
      </miContexto.Provider>
    </div>
  );
}
