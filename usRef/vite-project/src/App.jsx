import { StrictMode, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FocusableInput from "./componenti/FocusableInput";
import Componente from "./componenti/useffect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StrictMode>
        <Componente />
      </StrictMode>

      <FocusableInput />
    </>
  );
}

export default App;
