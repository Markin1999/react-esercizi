import { useRef } from "react";

export default function ToDoList({ todos, setTodos }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    const inputValue = inputRef.current.value;

    setTodos((prevTodos) => [...prevTodos, inputValue]);
    inputRef.current.value = "";
  };

  const handleReset = () => {
    setTodos([]);
  };

  return (
    <>
      <ul>
        {todos.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>

      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Invia</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
