import { useEffect } from "react";
import { useState } from "react";

export default function login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  function onChangeData(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  useEffect(() => {
    const { username, password } = data;
    setIsDisabled(username === "" || password === "");
  }, [data]);

  function handleReset() {
    setData({
      username: "",
      password: "",
      email: "",
    });
  }

  function handleLogin(event) {
    event.preventDefault();
  }

  return (
    <>
      {" "}
      <form action="" onSubmit={handleLogin}>
        <input
          type="username"
          name="username"
          id=""
          value={data.username}
          onChange={onChangeData}
        />
        <input
          type="password"
          name="password"
          id=""
          value={data.password}
          onChange={onChangeData}
        />
        <input type="email" name="mail" id="" onChange={onChangeData} />

        <button type="onSubmit" disabled={isDisabled}>
          Login
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </>
  );
}
