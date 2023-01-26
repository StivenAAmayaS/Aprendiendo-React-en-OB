// import React, { Component } from "react"
// import "../../styles/clock.scss";

// class Clock extends Component {
//    constructor(props) {
//       super(props);
//       // Estado privado del component
//       this.state = {
//          // Se genera una fecha como estado inicial del componente
//          fecha: new Date(),
//          edad: 0,
//          nombre: "Martín",
//          apellidos: "San José",
//       };
//    }
//    componentDidMount(){
//       this.timerID = setInterval (
//          () => this.tick(), 1000
//       );
//    }
//    componentWillUnmount() {
//       clearInterval (this.timerID);
//    }
//    render() {
//       return (
//          <div>
//          <h2>
//          Hora Actual:
//          {this.state.fecha.toLocaleTimeString()}
//          </h2>
//          <h3>{this.state.nombre} {this.state.apellidos}</h3>
//          <h1>Edad: {this.state.edad}</h1>
//          </div>
//       )
//    }
//    tick(){
//       this.setState((prevState) => {
//          let edad = prevState.edad +1;
//          return {
//             ...prevState,
//             fecha: new Date(),
//             edad
//          }
//       });
//    }
// }
// export default Clock;

// ---------------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
// import "../../styles/clock.scss";

const Clock = (props) => {

  const defaultState = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José"
  }

  const [user, setUser] = useState(defaultState);

  useEffect(() => {
    const intervalAge = setInterval(() => {
        actualiceUser();
    }, 1000)
  
    return () => {
        clearInterval(intervalAge)
    }
  })
  

  const actualiceUser = () => {
    return setUser({
      fecha: new Date(),
      edad: user.edad + 1,
      nombre: user.nombre,
      apellidos: user.apellidos,
    });
  };

  return (
    <div>
      <h2>
        Hora Actual: {user.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {user.nombre} {user.apellidos}
      </h3>
      <h1>Edad: {user.edad}</h1>
    </div>
  );
};

export default Clock;
