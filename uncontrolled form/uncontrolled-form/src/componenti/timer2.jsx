import { useRef } from "react";

export default function TimerTwo() {
  const displayTimer = useRef(null);
  const idRef = useRef(null);
  const secondRef = useRef(0);

  const handleClick = (event) => {
    event.preventDefault();
    if (idRef.current === null) {
      idRef.current = setInterval(() => {
        secondRef.current += 1;
        if (displayTimer.current) {
          displayTimer.current.textContent = `Timer: ${secondRef.current}`;
        }
      }, 1000);
    }
  };

  const handleReset = () => {
    if (idRef.current !== null) {
      clearInterval(idRef.current); // Clear the interval using the `current` property
      idRef.current = null; // Reset interval ID
      secondRef.current = 0; // Reset the timer
      if (displayTimer.current) {
        displayTimer.current.textContent = `Timer: ${secondRef.current}`;
      }
    }
  };

  return (
    <>
      <h1 ref={displayTimer}>Tempo: 0</h1>
      <button onClick={handleClick}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
