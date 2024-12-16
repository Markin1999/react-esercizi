import { useState } from "react";

export default function Container({ title, children }) {
  const [gancio, setGancio] = useState(false);

  function handleToggleCollapse() {
    setGancio((t) => !t);
  }

  return (
    <>
      <div onClick={handleToggleCollapse}>{title}</div>
      {gancio && (
        <div style={{ backgroundColor: "red", border: "1px solid black" }}>
          {children}
        </div>
      )}
    </>
  );
}
