import { useState } from "react";
import "./App.css";
import Semaforo from "./componenti/semaforo";

function App() {
  const [count, setCount] = useState("red");

  function cambiaColore() {
    if (count === "red") {
      setCount("yellow");
    } else if (count === "yellow") {
      setCount("green");
    } else {
      setCount("red");
    }
  }

  return (
    <>
      <div>
        {" "}
        <button onClick={cambiaColore}></button>
        <Semaforo colore={count} />
      </div>
    </>
  );
}

export default App;
