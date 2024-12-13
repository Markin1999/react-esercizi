import "./App.css";
import Colors from "./componenti/colors";

function App() {
  const arrayColor = [
    { id: 1, name: "Rosso" },
    { id: 2, name: "Verde" },
    { id: 3, name: "Blu" },
  ];

  return (
    <>
      <Colors arrayColor={arrayColor} />
    </>
  );
}

export default App;
