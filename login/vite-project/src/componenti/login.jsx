import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [messaggio, setMessaggio] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = localStorage.getItem("user"); //dobbiamo ancora trasformarlo in oggetto

    const parseUsers = JSON.parse(users); //trasformato in oggetto

    const userExist = parseUsers.some(
      (x) => x.mail === data.email && x.password === data.password
    );

    if (userExist) {
      setMessaggio("login effettuato con successo");
      const isLogged = localStorage.setItem("isLogged", true);
    } else {
      setMessaggio("credenziali errate");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit"></button>
        {messaggio && <p>{messaggio}</p>}
      </form>
    </>
  );
}
