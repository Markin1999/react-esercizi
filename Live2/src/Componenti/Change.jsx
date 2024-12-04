import { useState } from "react";

function Change() {
  const [colore, setColore] = useState("red"); //strutturizziamo le funzioni all'interno di useState

  const handleChange = () => {
    const colori = ["green", "yellow", "red", "brown"];
    const coloreSez = colori[Math.floor(Math.random() * colori.length)];
    setColore(coloreSez);
  };

  return (
    <>
      <h1 style={{ color: colore }}>Testo colorato</h1>
      <button onClick={handleChange}>Cliccami per cambiare colore</button>
    </>
  );
}

export default Change;
