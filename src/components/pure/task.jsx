import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task_class";

// Importamos la hoja de estilos de task.scss
import "../../styles/task.scss";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Created Task");

    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td>
        <span className="align-middle">{task.description}</span>
      </td>
      <td className="align-middle">
        {/* TODO: Sustituir por un badge */}
        <span>{task.level}</span>
      </td>
      <td className="align-middle">
        {/* TODO: Sustituir por iconos */}
        <span>{task.completed}</span>
      </td>
    </tr>
    // ---------------------------------------------------

    // <div>
    //   <h2 className="task-name">Nombre: {task.name}</h2>
    //   <h3>Descripción: {task.description}</h3>
    //   <h4>Nivel: {task.level}</h4>
    //   <h5>This task is: {task.completed ? "COMPLETED" : "PENDING"}</h5>
    // </div>
  );
};

// eslint-disable-next-line react/no-typos
TaskComponent.PropTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
