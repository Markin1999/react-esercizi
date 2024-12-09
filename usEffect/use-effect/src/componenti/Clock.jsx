import { useState, useEffect } from "react";

export function Clock() {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>{dateTime}</h2>
    </>
  );
}
