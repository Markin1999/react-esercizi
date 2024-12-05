import { useState } from "react";
import "./App.css";
import { FilmButton } from "./componenti/button";
import { Film } from "./componenti/film";

function App() {
  const [preferiti, setPreferiti] = useState([]);
  const filmArr = ["Matrix", "Inception", "Titanic", "Avengers"];

  function aggiungiPreferito(array) {
    if (!preferiti.includes(array)) {
      setPreferiti([...preferiti, ...array]);
    }
  }

  return (
    <div>
      <ul>
        {filmArr.map((x, index) => (
          <li key={index}>
            {x}
            <Film
              key={index}
              titolo={x}
              stato={preferiti.includes(x)}
              add={aggiungiPreferito}
              remove={rimuoviPreferiti}
            />
          </li>
        ))}
      </ul>
      <ul>
        {preferiti.length > 0 ? (
          preferiti.map((x, index) => <li key={index}>{x}</li>)
        ) : (
          <p>Aggiungi ai preferiti</p>
        )}
      </ul>
    </div>
  );
}

export default App;
