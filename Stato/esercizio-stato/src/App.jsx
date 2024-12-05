import "./App.css";
import { Counter } from "./componenti/counter";

function App() {
  return (
    <>
      <Counter number={0} aumenta={1} decrementa={1} />
    </>
  );
}

export default App;
