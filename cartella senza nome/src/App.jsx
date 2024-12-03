import Chat from "./chat";
import "./App.css";

function App() {
  const messaggi = [
    {
      testo: "Ciao",
      inviato: true,
    },
    {
      testo: "Come stai?",
      inviato: false,
    },
    {
      testo: "Tutto bene, grazie e tu?",
      inviato: true,
    },
    {
      testo: "Anche io, grazie!",
      inviato: false,
    },
  ];
  return (
    <>
      <h2>Chat</h2>
      {messaggi.map((x, index) => (
        <Chat inviato={x.inviato} testo={x.testo} key={index} />
      ))}
    </>
  );
}

export default App;
