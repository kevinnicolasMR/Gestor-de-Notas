import { useState, useContext} from "react";
import {TaskContext} from '../context/TaskContext'

function TaskFrom() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(
      {title,
      description
    });
    setTitle('')
    setDescription('')
    

  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Tema de la tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea placeholder="Describe la tarea Onichan -w-"
      onChange={(e) => setDescription(e.target.value)}
      value = {description}>
      </textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskFrom;
