import { useState } from "react";
import "./App.css";
import { FilmButton } from "./componenti/button";
import { Film } from "./componenti/film";

function App() {
  const [preferiti, setPreferiti] = useState([]);
  const filmArr = ["Matrix", "Inception", "Titanic", "Avengers"];

  function aggiungiPreferito(film) {
    if (!preferiti.includes(film)) {
      setPreferiti([...preferiti, film]);
    }
  }

  function rimuoviPreferiti(film) {
    setPreferiti(preferiti.filter((x) => x !== film));
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
              add={() => aggiungiPreferito(x)}
              a
              remove={() => rimuoviPreferiti(x)}
            />
          </li>
        ))}
      </ul>

      {preferiti.length > 0 ? (
        <ul>
          (
          {preferiti.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
          )
        </ul>
      ) : (
        <p>Aggiungi ai preferiti</p>
      )}
    </div>
  );
}

export default App;
