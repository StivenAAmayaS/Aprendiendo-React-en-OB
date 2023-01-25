import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels_enum";
import { Task } from "../../models/task_class";
import TaskComponent from "../pure/task";
// import PropTypes from 'prop-types';

const TasklistComponent = (props) => {
  const defaultTaks = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTaks]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task State has been modified");
    setLoading(false);

    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("TODO: cambiar estado de una tarea");
  };

  return (
    <div>
      <h1>Your Task:</h1>
      {/* TODO: Aplicar un for/map para renderizar una lista  */}
      <TaskComponent task={defaultTaks}></TaskComponent>
    </div>
  );
};

// Task_listComponent.propTypes = {}

export default TasklistComponent;
