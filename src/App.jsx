import TaskList from "./components/TaskList";
import TaskFrom from "./components/TaskFrom";

function App() {
  return (
    <div>
      <TaskFrom class="taskFrom"/>
      <div class="container">
        <TaskList />
        <div class="gestion"> hola </div>
      </div>
    </div>
  );
}

export default App;
