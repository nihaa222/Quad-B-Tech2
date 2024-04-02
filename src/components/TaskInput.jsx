import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { useRef } from "react";

const TaskInput = () => {
  // Create a ref to store the input element
  const inputRef = useRef(null);

  // State variable to hold the task text entered by the user
  const [text, setText] = useState("");

  // Dispatch function to interact with Redux store for adding tasks
  const dispatch = useDispatch();

  // Function to handle form submission
  const handleSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Check if the entered task text has any content (trimmed)
    if (text.trim()) {
      // Create a new task object with unique ID, text, and completion status
      const newTask = {
        id: Date.now(), // Use current timestamp for unique ID
        text,
        completed: false,
      };

      // Dispatch the `addTask` action from the `tasksSlice` to add the new task
      dispatch(addTask(newTask));

      // Clear the input field after successful task addition
      setText("");
    }
  };

  // Use useEffect hook to focus the input element only on initial render
  useEffect(() => {
    // Access the input element using the ref (handle potential null case)
    inputRef.current?.focus();
  }, []);

  return (
    <>
      {/* Fragment for better JSX structure */}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text} // Bind input value to the state variable
          className="input"
          onChange={(e) => setText(e.target.value)} // Update state on input change
          ref={inputRef} // Assign ref to the input element
          placeholder="Enter a task" // Add placeholder for better UX
        />
        <button className="button" type="submit">
          <span className="">Add Task</span>
        </button>
      </form>
    </>
  );
};

export default TaskInput;
