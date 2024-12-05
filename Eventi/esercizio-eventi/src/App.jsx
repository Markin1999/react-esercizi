import "./App.css";
import { AlertClock } from "./componenti/alertClock";

function App() {
  function currentOra() {
    alert("Current time:" + new Date().toLocaleTimeString());
  }
  return (
    <>
      <AlertClock onClick={currentOra} />
    </>
  );
}

export default App;
