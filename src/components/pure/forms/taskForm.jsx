import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels_enum";
import { Task } from "../../../models/task_class";

const TaskForm = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  return (
    <div className="card d-flex justify-content-center align-align-items-center" style={{width: "400px"}}>
      <form
        onSubmit={addTask}
        className="d-flex flex-column justify-content-center align-items-center p-4 gap-3"
      >
        <div className="d-flex flex-column gap-2 w-100">
          <input
            ref={nameRef}
            id="inputName"
            type="text"
            className="form-control"
            required
            autoFocus
            placeholder="Task name"
          />
          <textarea
            ref={descriptionRef}
            id="inputDescription"
            type="text"
            className="form-control"
            required
            placeholder="Task description"
          />
          <div className="d-flex gap-2">
            <label htmlFor="selectLevel" className="sr-only">
              Priority:
            </label>
            <select
              ref={levelRef}
              defaultValue={LEVELS.NORMAL}
              id="selectLevel"
            >
              <option value={LEVELS.NORMAL}>Normal</option>
              <option value={LEVELS.URGENTE}>Urgent</option>
              <option value={LEVELS.BLOCKING}>Blocking</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-success w-100">
          {length > 0 ? "Add New Task" : "Create your First Task"}
        </button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
};

export default TaskForm;
