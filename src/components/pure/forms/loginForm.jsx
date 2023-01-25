/**
 *
 * Componente que va a contener un formulario para autenticación de usuarios.
 *
 */

import React, { useState } from "react";

const LoginForm = () => {
  const initialCredentials = [
    {
      user: "",
      password: "",
    },
  ];

  const [credential, setCredential] = useState(initialCredentials);
  
  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
};

export default LoginForm;
