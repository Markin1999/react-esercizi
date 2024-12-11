import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyUncontrolledForm from "./componenti/MyUncontrolledForm";
import Timer from "./componenti/clock";
import TimerTwo from "./componenti/timer2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyUncontrolledForm />

      <TimerTwo />
    </>
  );
}

export default App;
