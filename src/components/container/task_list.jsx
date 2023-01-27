import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels_enum";
import { Task } from "../../models/task_class";
import TaskComponent from "../pure/task";
// import PropTypes from 'prop-types';

// Importamos la hoja de estilos de task.scss
import "../../styles/task.scss";

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
      <div className="col-12">
        <div className="card">
          {/* card header {title} */}
          <div className="card-header p-3">
            <h5>Your Tasks:</h5>
          </div>
          {/* card-body {content} */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Iterar sobre una lista de tareas */}
                <TaskComponent task={defaultTaks}></TaskComponent>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Task_listComponent.propTypes = {}

export default TasklistComponent;
