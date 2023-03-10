import TaskCard from "./TaskCard";
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {
  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 class="taskListNull">No hay tareas aun</h1>;
  }

  return (
    <div class="containerX">
    <div class="x">
      {tasks.map((task) => (
        <TaskCard 
        key={task.id} 
        task = {task}
        />
      ))}
    </div>
    </div>
  );
}

export default TaskList;
