/**
 * Ejemplo de componente tipo clase que dispone de los métodos de ciclo de vida
 *
 */

import React, { Component } from "react";

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("CONSTRUCTOR: Cuando se instancia el componente");
  }

  componentWillMount() {
    console.log("componentWillMount: Antes del montaje del componente");
  }

  componentDidMount() {
    console.log(
      "componentDidMount: Justo al acabar el montaje del componente, antes de renderizarlo"
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps: Si va a recibir nuevas props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
     * Completar se el componente debe o no actualizarse
     */
    // return true / false
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate: Justo antes de actualizarse");
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("componentDidUpdate: Justo después de actualizarse");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Justo antes de desaparecer");
  }

  render() {
    return (
      <div>
        <h1>Hola</h1>
      </div>
    );
  }
}

export default LifeCycleExample;
