import { useEffect } from "react";
import { useState } from "react";

export default function Counter({ increment }) {
  const [counter, setCounter] = useState(0);

  function onclick() {
    setCounter(counter + increment);
  }

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <>
      <h2>{counter}</h2>

      <button onClick={onclick}></button>
    </>
  );
}
