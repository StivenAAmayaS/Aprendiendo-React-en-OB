import './App.css';
import ContactListComponent from './components/container/ContactListComponent';
// import TasklistComponent from './components/container/task_list';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greeting name="Stiven"></Greeting> */}
        {/* <GreetingF name="Stiven"/> */}
        {/* <TasklistComponent></TasklistComponent> */}
        <ContactListComponent />
      </header>
    </div>
  );
}

export default App;
