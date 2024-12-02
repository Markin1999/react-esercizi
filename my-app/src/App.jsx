import "./App.css";
import Dashboard from "./components/dashboard";

function App() {
  const arrNom = ["Segio", "Michale", "Antoine", "Lucio"];

  const user = {
    nome: "Marco",
    cognome: "Filannino",
    telefono: 3332452232,
    email: "skskksks@gmail.com",
  };

  return (
    <>
      <h1>"Hello, World!"</h1>

      {user ? (
        <Dashboard
          nome={user.nome}
          cognome={user.cognome}
          telefono={user.telefono}
          email={user.email}
        ></Dashboard>
      ) : (
        <h1>DATI NON ESISTENTI</h1>
      )}
    </>
  );
}

export default App;
