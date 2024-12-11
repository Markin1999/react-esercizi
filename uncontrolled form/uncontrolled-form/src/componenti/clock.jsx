import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(new Date());
  const [idInterval, setIdInterval] = useState(null);

  useEffect(() => {
    return () => {
      if (idInterval) {
        clearInterval(idInterval);
      }
    };
  }, [idInterval]);

  const handleClick = () => {
    if (!idInterval) {
      const intervalId = setInterval(() => {
        setTimer(new Date());
      }, 1000);
      setIdInterval(intervalId);
    }
  };

  const handleReset = () => {
    if (idInterval) {
      clearInterval(idInterval);
      setIdInterval(null);
    }
  };

  return (
    <>
      <h1>Tempo che scorre: {timer.toLocaleTimeString()}</h1>
      <button onClick={handleClick}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
