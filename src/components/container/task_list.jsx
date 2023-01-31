import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels_enum";
import { Task } from "../../models/task_class";
import TaskComponent from "../pure/task";
// import PropTypes from 'prop-types';

// Importamos la hoja de estilos de task.scss
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TasklistComponent = () => {
  const defaultTaks1 = new Task(
    "Example-1",
    "Description 1",
    true,
    LEVELS.NORMAL
  );

  const defaultTaks2 = new Task(
    "Example-2",
    "Description 2",
    false,
    LEVELS.URGENTE
  );

  const defaultTaks3 = new Task(
    "Example-3",
    "Description 3",
    false,
    LEVELS.BLOCKING
  );

  // Estado del componente
  const [tasks, setTasks] = useState([
    defaultTaks1,
    defaultTaks2,
    defaultTaks3,
  ]);

  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task State has been modified");
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);

  function completedTask(task) {
    console.log("Complete this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    // We update the state of the component with the new list of tasks and it will update the iteration of the task in order to show the task updated
    setTasks(tempTasks);
  }

  function deleteTask(task) {
    console.log("Delete this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task) {
    console.log("Delete this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  const Table = () => {
    return (
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
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completedTask}
                remove={deleteTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let tasksTable = <Table></Table>;

  if (tasks.length > 0) {
    tasksTable = <Table></Table>;
  } else {
    tasksTable = (
      <div>
        <h3>There are no tasks to show</h3>
        <h4>Please, create one </h4>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
      <div className="col-12">
        <div className="card">
          {/* card header {title} */}
          <div className="card-header p-3 d-flex">
            <h5 className="mb-0">Your Tasks:</h5>
          </div>
          {/* card-body {content} */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{
              position: "relative",
              height: "400px",
              overflowY: "auto",
            }}
          >
            {loading ? <p>Loading tasks...</p> : tasksTable}
          </div>
        </div>
      </div>
      <TaskForm add={addTask} length={tasks.length}></TaskForm>
    </div>
  );
};

// Task_listComponent.propTypes = {}

export default TasklistComponent;
