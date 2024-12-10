import { useEffect, useRef, useState } from "react";

export default function Email() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [validazione, setValidazione] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    if (!email.include("@") || !email.includes(".")) {
      setError("formato email non valido");
      setValidazione("");
    } else {
      setError("");
      setValidazione(email);
    }
  }

  /*useEffect(() => {
    if (
      validazione &&
      (!validazione.includes("@") || !validazione.includes("."))
    ) {
      setError("formato email non valido");
    } else {
      setError("");
    }
  }, [validazione]);*/

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" emailRef={emailRef} />

        <button type="submit">Invia</button>

        {error ? <p>{error}</p> : validazione && <p>{validazione}</p>}
      </form>
    </>
  );
}
