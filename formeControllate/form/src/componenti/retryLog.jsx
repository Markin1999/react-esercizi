import { useEffect } from "react";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState(" ");
  const [mail, setMail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!username === " " && !password === " ") {
      setIsDisabled(true);
    }
  });

  function onChangeUsername(event) {
    setUsername(event.target.value);
  }
  function onChangeMail(event) {
    setMail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <input type="username" name="" id="" onChange={onChangeUsername} />
      <input type="password" name="" id="" onChange={onChangePassword} />
      <input type="email" name="" id="" onChange={onChangeMail} />

      <button disabled={isDisabled ? true : false}>Login</button>
    </>
  );
}
