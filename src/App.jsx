import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="container">
        <h1 className="title">Simple Todo App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
