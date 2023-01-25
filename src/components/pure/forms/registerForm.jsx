import React, { useState } from "react";

export const RegisterForm = () => {
  const initialData = [
    {
      user: "",
      name: "",
      email: "",
      password: "",
    },
  ];

  const [data, setData] = useState(initialData);

  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
};
