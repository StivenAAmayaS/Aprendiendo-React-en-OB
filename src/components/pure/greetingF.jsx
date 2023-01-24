import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {

  // Breve introducción a useState   ( hooks )
  const [age, setAge] = useState(22);

  const birthday = () => {
    // Actualizar el State
    setAge(age + 1)
  }
  return (
    <div>
      greating
      <h1>Hola, { props.name }, desde componente funcional!</h1>
      <h2> Tu edad es de: { age }</h2>
      <div>
        <button onClick={ birthday }>Cumplir años</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
    name: PropTypes.string,
};

export default GreetingF;
