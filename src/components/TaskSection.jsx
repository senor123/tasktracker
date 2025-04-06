
import React, { useState } from 'react'
import { v4 as uuid4 } from 'uuid';
import TaskList from './TaskList';
const TaskSection = ({tasks,onAddTask,onDeleteTask}) => {
  const [taskDetails,setTaskDetails]=useState('')

  const setTask=(event)=>{
    setTaskDetails(event.target.value)
  }

  const addTask=()=>{
    onAddTask({id:uuid4(),task:taskDetails})
    setTaskDetails('')
  }
  return (
    <div className='taskcontainer'>
        <h1>Task Tracker</h1>
        <input type='text' value={taskDetails} onChange={setTask} className='taskinput' placeholder='Add a new task'/>
        <button className='addbutton' onClick={addTask}><svg xmlns="http://www.w3.org/2000/svg" className='addicon' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg><span className='spanbtn'>Add Task</span></button>

        <TaskList tasks={tasks} onDelete={onDeleteTask} />
    </div>
  )
}

export default TaskSection