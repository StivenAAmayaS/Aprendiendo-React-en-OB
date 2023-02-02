import React from 'react'
import { useParams } from 'react-router-dom'

const TasksDetailPage = () => {

    const {id} =  useParams();

  return (
    <div className='card'>
        <div className='card-header'>
            <h1>Task Detail - {id} </h1>
        </div>
        <div className='card-body'></div>
    </div>
  )
}

export default TasksDetailPage