import { useEffect, useRef, useState } from "react";

export default function Registrazione() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const nomeRef = useRef(null);
  const cognomeRef = useRef(null);
  const mailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nome = nomeRef.current.value;
    const mail = mailRef.current.value;
    const cognome = cognomeRef.current.value;
    const password = passwordRef.current.value;

    if (
      password.length < 6 &&
      !/\d/.test(password) &&
      !/[!@#$%^&*()]/.test(password)
    ) {
      setError("La password è troppo corta");
    } else {
      setError("");
    }

    const updatedData = [
      ...data,
      {
        nome: nome,
        cognome: cognome,
        mail: mail,
      },
    ];

    setData(updatedData);

    if (!error) {
      localStorage.setItem("user", JSON.stringify(updatedData));
    }
  };

  const existUser = localStorage.getItem("user");

  if (existUser) {
    const parseExistUser = JSON.parse(existUser); //diventa oggetto
    if (parseExistUser.mail === data.mail) {
      setError("mail gia registrata");
      return;
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" ref={nomeRef} />
        <label htmlFor="cognome">Cognome:</label>
        <input type="text" name="cognome" ref={cognomeRef} />
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="mail" ref={mailRef} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" ref={passwordRef} id="" />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button disabled={error ? true : false} type="submit">
          invia
        </button>
      </form>
    </>
  );
}
