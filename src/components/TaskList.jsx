import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks,onDelete}) => {
  return (
    <div>
        <div className='tasklist'>
            {
                tasks.map(taskDetails=><TaskItem key={taskDetails.id} taskDetails={taskDetails} deleteTask={onDelete}  />)
            }
        </div>
    </div>
  )
}

export default TaskList