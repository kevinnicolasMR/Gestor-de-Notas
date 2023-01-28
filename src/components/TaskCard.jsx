import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({ task }) {
  const {deleteTask} = useContext(TaskContext)
  
  return (
      <div class="taskList">
        <div class="relativo"> <button class="eliminar" onClick={() => deleteTask(task.id)}> X </button>
      </div>
     <h1 class="h1">Tarea: {task.title}</h1>
      <p class="p">{task.description}</p>
      </div>
  );
}

export default TaskCard;
