// Importamos la hoja de estilos de task.scss
import "../../styles/task.scss";

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task_class";

import { LEVELS } from "../../models/levels_enum";

const TaskComponent = ({ task, complete,  remove }) => {
  useEffect(() => {
    console.log("Created Task");

    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  /**
   * function taht return a Badge
   * depending on the level of the task
   *  */

  const lineThrough = task.completed ? "text-decoration-line-through" : "";

  const taskLevelBadge = () => {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className={`badge bg-primary ${lineThrough}`}>{task.level}</span>
          </h6>
        );
      case LEVELS.URGENTE:
        return (
          <h6 className="mb-0">
            <span className={`badge bg-warning ${lineThrough}`}>{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className={`badge bg-danger ${lineThrough}`}>{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  };

  const taskCompletedIcon = () => {
    if (task.completed) {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-on task-action"
          style={{ color: "green", fontSize: "20px" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-off task-action"
          style={{ color: "grey", fontSize: "20px" }}
        ></i>
      );
    }
  };

  return (
    <tr className={`fw-normal ${task.completed ? "task-completed" : "task-pending"}`}>
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td>
        <span className="align-middle">{task.description}</span>
      </td>
      <td className="align-middle">
        {/* TODO: Sustituir por un badge */}
        {/* Execution of functions to return badge element */}
        {taskLevelBadge()}

        {/* <span>{task.level}</span> */}
      </td>
      <td className="align-middle">
        {/* TODO: Sustituir por iconos */}
        {taskCompletedIcon()}
        <i
          onClick={() => remove(task)}
          className="bi-trash task-action"
          style={{ color: "tomato", fontSize: "20px" }}
        ></i>

        {/* <span>{task.completed ? "Completed" : "Pending"}</span> */}
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

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
