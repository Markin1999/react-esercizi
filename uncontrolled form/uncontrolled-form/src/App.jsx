import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyUncontrolledForm from "./componenti/MyUncontrolledForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyUncontrolledForm />
    </>
  );
}

export default App;
