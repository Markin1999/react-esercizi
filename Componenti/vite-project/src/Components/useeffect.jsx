import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("updating date");

      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <>
      <p>Current time: {date.toLocaleTimeString()}</p>
    </>
  );
}
