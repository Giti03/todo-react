import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Prevent adding empty tasks
    if (!inputValue.trim()) return;

    // Create the new todo object
    const newTodo = {
      id: Date.now(), // Unique ID
      content: inputValue.trim(),
      checked: false,
    };

    // Pass it to the parent component
    onAddTodo(newTodo);

    // Clear the input field
    setInputValue("");
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            placeholder="Enter a task"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
export default TodoForm;