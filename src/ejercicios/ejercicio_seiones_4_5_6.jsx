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
  const [state, setState] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  });

  useEffect(() => {
    const timerID = setInterval(() => {
        tick();
    }, 1000)
  
    return () => {
        clearInterval(timerID)
    }
  }, [])
  

  const tick = () => {
    setState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  };

  return (
    <div>
      <h2>
        Hora Actual: {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default Clock;
