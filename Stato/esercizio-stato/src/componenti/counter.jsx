import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ number, aumenta, decrementa, reset }) {
  const [counter, setCounter] = useState(number);

  function Aumenta() {
    setCounter((prevCounter) => prevCounter + aumenta);
  }

  function Decrementa() {
    setCounter((prevCounter) => prevCounter - decrementa);
  }

  function Reset() {
    setCounter(number);
  }

  return (
    <>
      <CounterDisplay counter={counter} />
      <p>{counter}</p>
      <button onClick={Aumenta}>Aumenta</button>
      <button onClick={Decrementa}>Decrementa</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
}

//Il parametro dovrebbe essere una funziona, perche react si  aggiorna utilizzano il valore dello stato della funzione ogni volta che viene chiamata, mentre con una valore immediato react non garantisce l'aggiornamento costante di quel parametro, in quanto potrebbe avere ancora il vecchio valore.
