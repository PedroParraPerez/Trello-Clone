import React, { useState } from "react";

import "./App.css";
import ToDoList from "./components/todolis";

function App() {
  const [todos, setTodos] = useState([null, null, null]);
  const deleteListOfTodos = (id) => {
    let newlist = todos.filter((value, index) => id !== index);
    setTodos(newlist);
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          setTodos([...todos, null]);
        }}
      >
        Añadir lista de tareas
      </button>
      <div className="listoftodolist">
        {todos.map((value, index) => {
          return (
            <ToDoList
              keys={index}
              deletelist={() => {
                deleteListOfTodos(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
