import { useRef } from "react";

export default function MyUncontrolledForm() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const sessionRef = useRef("");
  const formRef = useRef(null);

  function onLogin(event) {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const checkbox = sessionRef.current.checked;

    const data = {
      username,
      password,
      checkbox,
    };
    console.log(data);

    /* const username = event.target.element.namedItem("username").value;
    const password = event.target.element.namedItem("password").value;
    const session = event.target.element.namedItem("session").value;*/
  }

  function loginWithFormData(event) {
    event.preventDefault();

    if (formRef.current) {
      const form = new FormData(formRef.current);

      const user = form.get("username");
      const pass = form.get("password");
      const sess = form.get("session");

      const data = {
        user,
        pass,
        sess,
      };
      console.log("Dati raccolti con FormData:", data);
    }
  }

  return (
    <>
      <form ref={formRef} onSubmit={onLogin}>
        <input type="text" ref={usernameRef} name="username" id="" />
        <input type="password" ref={passwordRef} name="password" />
        <input type="checkbox" ref={sessionRef} name="session" />

        <button type="submit">Login</button>
        <button type="reset">Reset</button>
        <button onClick={loginWithFormData}>FormData</button>
      </form>
    </>
  );
}
