import { useContext, useState } from "react";

export default function Log({ setIsLogged }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [messaggio, setMessaggio] = useState("");
  const { login } = useContext(userContext);

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleLogin(event) {
    event.preventDefault();
    const userDatabase = localStorage.getItem("users");
    const parseUsers = JSON.parse(userDatabase);
    const userExist = parseUsers.find(
      (x) => x.email === data.email && x.password === data.password
    );
    if (userExist) {
      setMessaggio("Login effettuato con successo");
      login(userExist);
      localStorage.setItem("userExist", JSON.stringify(userExist));
    } else {
      setMessaggio("Credenziali errate");
    }
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Login</button>
        {messaggio && <p style={{ color: "red" }}>{messaggio}</p>}
      </form>
    </>
  );
}
