import React from "react";
import "./ToDoTask.css";

function ToDoTask({ task, handleTaskDelete }) {
  const [isComplete, setIsComplete] = React.useState(false);

  function handleCheckboxClick(event) {
    const isChecked = event.target.checked;
    setIsComplete(isChecked);
  }

  return (
    <div
      className={
        isComplete
          ? "to-do-task-container task-complete"
          : "to-do-task-container"
      }
    >
      <input
        type="checkbox"
        checked={isComplete}
        onChange={handleCheckboxClick}
      />
      <p className={isComplete ? "complete" : ""}>{task}</p>
      <button onClick={() => handleTaskDelete(task)} className="delete">
        X
      </button>
    </div>
  );
}

export default ToDoTask;
