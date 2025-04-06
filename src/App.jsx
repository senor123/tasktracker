import { useState } from 'react'
import './App.css'
import TaskSection from './components/TaskSection'

function App() {
  const [tasks, setTasks] = useState([])

  const handleAddTask=(task)=>{
    setTasks(prevTasks=>[...prevTasks,task])
  }
  const handleDeleteTask=(id)=>{
    setTasks(prevTasks=>{
      const tempTasks=prevTasks.filter(task=>task.id!==id)
      return tempTasks
    })
  }
  console.log(tasks)
  return (
    <div className='todocontainer'>
      <TaskSection tasks={tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />
    </div>
  )
}

export default App
