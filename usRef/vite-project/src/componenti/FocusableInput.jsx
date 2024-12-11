import { useEffect, useRef, useState } from "react";

export default function FocusableInput() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState([]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  const handleClick = () => {
    const input = inputRef.current.value;

    setInputValue((prev) => [...prev, input]);
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Invia</button>
      {inputValue.map((x, index) => (
        <p key={index}>{x}</p>
      ))}
    </>
  );
}
