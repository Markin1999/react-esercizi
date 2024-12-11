import { useEffect, useState } from "react";

export default function Hello() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [button, setButton] = useState("false");

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length > 10) {
      setNome(value.toUpperCase());
    } else {
      setNome(value);
    }
  };

  const handleChangeemail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlClickemail = () => {
    setButton("true");

    if (!email.includes("@") || !email.includes(".")) {
      setError("Errore. Email non corretta");
    } else {
      setError("");
    }
  };

  return (
    <>
      <input type="text" value={nome} onChange={handleChange} />
      {!nome ? <p>Ciao, Ottavio</p> : <p>Ciao, {nome}</p>}
      <hr />
      <input type="text" value={email} onChange={handleChangeemail} />
      <button value={button} onClick={handlClickemail}></button>
      {button === "true" && <h1>{error || email}</h1>}
    </>
  );
}
