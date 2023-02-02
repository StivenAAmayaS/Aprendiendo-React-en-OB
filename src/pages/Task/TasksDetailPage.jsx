import React from 'react'
import { useParams } from 'react-router-dom'
import { Task } from '../../models/task_class';

const TasksDetailPage = ({ task }) => {

    const {id} =  useParams();

  return (
    <div className='card'>
        <div className='card-header'>
            <h1>Task Detail - {id} </h1>
        </div>
        <div className='card-body'>
            <h2>{task.name}</h2>
            <h3>{task.description}</h3>
        </div>
    </div>
  )
}

export default TasksDetailPage