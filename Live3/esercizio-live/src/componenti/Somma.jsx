import { useState } from "react";

function Somma() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);

  const changeNum1 = (event) => {
    setnum1(Number(event.target.value)); //Quando cambio il valore del campo input. Tradotta: il valore corrente dell'elemento che ha generato questo evento(onchange)
  };

  const changeNum2 = (event) => {
    setnum2(Number(event.target.value));
  };
  //Ricorda cio che viene restituito dall'input è sempre una stringa

  return (
    <div>
      <input type="number" value={num1} onChange={changeNum1} />
      <input type="number" value={num2} onChange={changeNum2} />

      <h2>Somma:{num1 + num2}</h2>
    </div>
  );
}

export default Somma;
