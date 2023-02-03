import "./App.css";
// import TasklistComponent from './components/container/task_list';

// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import ContactListComponent from './components/container/ContactListComponent';
// import { Ejemplo1 } from './hooks/ejemplo1';
// import { Ejemplo2 } from './hooks/ejemplo2';
// import MiComponenteContexto from './hooks/ejemplo3';
// import { Ejemplo4 } from './hooks/ejemplo4';
// import { GreetingStyled } from './components/pure/greetingStyled';
// import Clock from './ejercicios/ejercicio_seiones_4_5_6';
// import Father  from './components/container/Father';
// import OptionalRender from "./components/pure/OpcionalRender";
// import ExerciseConditional from "./ejercicios/ejercicio_sesiones_10_11_12";
// import LoginFormik from "./components/pure/forms/LoginFormik";
// import RegisterFormik from "./components/pure/forms/RegisterFormik";
// import TaskFormFormik from "./components/pure/forms/TaskFormFormik";
// import AsyncExample from "./components/pure/AsyncExample";
import ObservableExample from "./components/pure/ObservableExample";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <Greeting name="Stiven"></Greeting> */}
      {/* <GreetingF name="Stiven"/> */}

      {/* Ejemplos de uso de Hooks */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteContexto></MiComponenteContexto> */}
      {/* <Ejemplo4 nombre="Stiven"> */}
      {/* Todo lo que hay aqui es tratado como props.children */}
      {/* <h3>Contenido de props.children</h3> */}
      {/* </Ejemplo4> */}
      {/* <GreetingStyled name="Stiven"></GreetingStyled> */}

      {/* <Clock></Clock> */}
      {/* </header> */}

      {/* Getion de eventos */}
      {/* <Father></Father> */}

      {/* Ejercicio sesiones 7, 8 y 9 */}
      {/* <ContactListComponent></ContactListComponent> */}

      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Ejercicio sesiones 10, 11 y 12 */}
      {/* <ExerciseConditional></ExerciseConditional> */}

      {/* <LoginFormik></LoginFormik> */}

      {/* <RegisterFormik></RegisterFormik> */}

      {/* Ejercicio sesiones 13, 14 y 15 */}
      {/* <TaskFormFormik></TaskFormFormik> */}

      {/* 🔰 Ejemplos de procesos asincronos 🔰 */}
      {/* <AsyncExample></AsyncExample> */}
      <ObservableExample></ObservableExample>

      {/* PROYECTO FINAL */}
      {/* <TasklistComponent></TasklistComponent> */}
    </div>
  );
}

export default App;
