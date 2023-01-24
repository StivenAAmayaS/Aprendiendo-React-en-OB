import React from "react";
import { LEVELS } from "../../models/levels_enum";
import {Task} from "../../models/task_class";
import TaskComponent from "../pure/task";
// import PropTypes from 'prop-types';

const TasklistComponent = (props) => {

  const defaultTaks = new Task("Example", "Default description", false, LEVELS.NORMAL);

  const changeState = () => {
    console.log("TODO: cambiar estado de una tarea");
  }
  
  return (
    <div>
        <h1>
            Your Task:
        </h1> 
        {/* TODO: Aplicar un for/map para renderizar una lista  */}
        <TaskComponent task={defaultTaks}></TaskComponent>
    </div>
  );
};

// Task_listComponent.propTypes = {}

export default TasklistComponent;
