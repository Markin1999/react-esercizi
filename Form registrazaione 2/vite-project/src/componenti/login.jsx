import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    mail: "",
    password: "",
  });

  const onchange = (event) => {
    const { name, value } = event.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onclick = (event) => {
    event.preventDefault();

    const utente = JSON.parse(localStorage.getItem("key"));

    if (utente) {
      if (
        utente.some((x) => x.mail === data.mail && x.password === data.password)
      ) {
        localStorage.setItem("isLogged", JSON.stringify(data));
        alert("accesso effettuato");
      } else {
        alert("accesso negato");
      }
    }

    setData({
      mail: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={onclick}>
        <label htmlFor="mail">E-mail:</label>
        <input type="email" value={data.mail} name="mail" onChange={onchange} />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={data.password}
          name="password"
          onChange={onchange}
        />

        <button type="submit">Invia</button>
      </form>
    </>
  );
}
