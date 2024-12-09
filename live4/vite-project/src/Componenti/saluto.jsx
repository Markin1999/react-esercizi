import { useEffect, useState } from "react";

export default function Hello() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    console.log(nome);
  }, [nome]);

  return (
    <>
      <input
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      {!nome ? <p>Ciao, Ottavio</p> : <p>Ciao, {nome}</p>}
    </>
  );
}
