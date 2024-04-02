import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../features/tasks/tasksSlice";

const TaskList = () => {
  // Access tasks data from Redux store state using useSelector
  const tasks = useSelector((state) => state.tasks);

  // Dispatch function to interact with Redux store for task actions
  const dispatch = useDispatch();

  // Return JSX to render the task list
  return (
    <ul className="ul" style={{ listStyle: "none", padding: 0 }}>
      {/* Unordered list with no styling and padding */}
      {tasks.map((task) => (
        <li // List item for each task
          key={task.id} // Unique key for each task (essential for performance)
          style={{
            display: "flex", // Arrange items in a horizontal row
            alignItems: "center", // Align items vertically in the center
          }}
          className="list" // Add a CSS class for styling
        >
          {/* // Container for checkbox and text (second can be renamed) */}
          <input // Checkbox for task completion
            type="checkbox"
            className="checkbox"
            checked={task.completed} // Set checked state based on task.completed
            onChange={() => dispatch(toggleTaskCompletion(task.id))} // Handle checkbox change to toggle completion using dispatch and toggleTaskCompletion action
          />
          <div // Container for task text
            className="text"
            style={{
              marginLeft: "5px", // Add margin to the left
              textDecoration: task.completed ? "line-through" : "none", // Apply line-through decoration for completed tasks
            }}
          >
            {task.text} {/* Display the task text */}
          </div>

          <button // Button for deleting a task
            className="button2"
            onClick={() => dispatch(deleteTask(task.id))} // Handle button click to delete task using dispatch and deleteTask action
            style={{ textDecoration: "none" }} // Remove default text decoration for the button
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
