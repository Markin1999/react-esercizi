import "./App.css";
import Change from "./Componenti/Change";
import List from "./Componenti/list";
import Welcome from "./Componenti/Welcome";

function App() {
  return (
    <>
      <Welcome name="John" age={20} />
      <List />
      <Change />
    </>
  );
}

export default App;
