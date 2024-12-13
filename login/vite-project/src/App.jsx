import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Registrazione from "./componenti/registrazione";
import Login from "./componenti/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Registrazione />
      <Login />
    </>
  );
}

export default App;
