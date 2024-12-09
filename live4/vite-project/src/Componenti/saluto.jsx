import { useEffect, useState } from "react";

export default function Hello() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(nome);
  }, [nome]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length > 10) {
      setNome(value.toUpperCase());
    } else {
      setNome(value);
    }
  };

  const handlClickemail = (event) => {
    const value = event.target.value;

    if (!email.includes("@") || !email.includes(".")) {
      setError("Errore. Email non corretta");
    } else {
      setError("");

      setEmail(value);
    }
  };

  return (
    <>
      <input type="text" value={nome} onChange={handleChange} />
      {!nome ? <p>Ciao, Ottavio</p> : <p>Ciao, {nome}</p>}
      <hr />

      <input type="text" value={email} onChange={handleChangeemail} />

      <p>{error || email}</p>
      <button onClick={handlClickemail}> clicca </button>
    </>
  );
}
