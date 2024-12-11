import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./componenti/usEffect";
import { Clock } from "./componenti/Clock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter increment={1} initial={0} />
      <Clock />
    </>
  );
}

export default App;
