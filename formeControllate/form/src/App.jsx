import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InteractiveWelcome from "./componenti/InteractiveWelcome";
import Login from "./componenti/retryLog";

function App() {
  const [count, setCount] = useState(0);

  function handleLogin(event) {
    event.preventDefault();
  }

  return (
    <>
      <Login handleLogin={handleLogin} />
    </>
  );
}

export default App;
