import React, { useState } from "react";

// Definiendo estilos en constantes

// Estilo para usuario logeado
const loggedStyle = {
  color: "white",
};

// Estilo para usuario no logeado
const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};
export const GreetingStyled = (props) => {
  // Generamos un estado para el componente y asi controlar si es usuario está o no logeado
  const [logged, setLogged] = useState(false);

  const greetingUser = () => <p>Hola, {props.name}</p>;
  const pleaseLogin = () => <p>Please login</p>;

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingUser() : pleaseLogin()}
      <button
        onClick={() => {
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};
