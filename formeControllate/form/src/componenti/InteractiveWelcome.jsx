import { useState } from "react";

export default function InteractiveWelcome() {
  const [name, setName] = useState("");

  function onchange(event) {
    setName(event.target.value);
  }
  return (
    <>
      <input type="text" value={name} onChange={onchange} />
      <p>{name}</p>
    </>
  );
}
