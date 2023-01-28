import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskFrom() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div class="taskFormContainer">
      <form onSubmit={handleSubmit} class="taskForm">
        <input
          placeholder="Tema de la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          class="input"
        />
        <textarea
          placeholder="Describe la tarea -w-"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          class="input"
        ></textarea>
        <div class="submitContainer">
          <button class="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default TaskFrom;
