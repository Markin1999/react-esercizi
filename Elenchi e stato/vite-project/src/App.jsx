import { useState } from "react";
import "./App.css";
import ToDoList from "./componenti/todolist";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <ToDoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
