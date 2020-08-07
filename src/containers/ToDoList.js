import React from "react";
import "./ToDoList.css";
import ToDoTask from "../components/ToDoTask";

function ToDoList() {
  const [list, setList] = React.useState([]);
  const [currentTaskValue, setCurrentTaskValue] = React.useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    if (currentTaskValue.trim() === "") {
      return;
    }

    const listClone = list.slice();
    listClone.push(currentTaskValue);
    setList(listClone);
    setCurrentTaskValue("");
  }
  function handleCurrentTaskChange(event) {
    const task = event.target.value;
    setCurrentTaskValue(task);
  }

  function handleTaskDelete(task) {
    const listClone = list.slice();

    const newList = listClone.filter((t) => {
      return t !== task;
    });

    setList(newList);
  }

  return (
    <div className="to-do-list-container">
      <h1>To Do List</h1>
      {list.map((task) => {
        return (
          <ToDoTask
            task={task}
            handleTaskDelete={handleTaskDelete}
            key={task}
          />
        );
      })}

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={currentTaskValue}
          onChange={handleCurrentTaskChange}
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default ToDoList;
