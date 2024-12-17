import { useEffect, useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    nome: "",
    mail: "",
    password: "",
  });
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  const onchange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const updatedArray = [...dataArray, data];

  localStorage.setItem("key", JSON.stringify(dataArray));
  const handleSubmit = (event) => {
    event.preventDefault();

    setDataArray(updatedArray);
    setData({ nome: "", mail: "", password: "" });
  };

  return (
    <>
      <h1>Registrazione</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            value={data.nome}
            onChange={onchange}
          />
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="mail"
            value={data.mail}
            onChange={onchange}
          />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onchange}
          />
          <button type="submit">Invia</button>
        </form>
      </div>
    </>
  );
}
