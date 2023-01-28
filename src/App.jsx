import TaskList from "./components/TaskList";
import TaskFrom from "./components/TaskFrom";

function App() {
  return (
    <div class="container">
      <TaskFrom class="taskFrom"/>
      <TaskList/>
    </div>
  );
}

export default App;
