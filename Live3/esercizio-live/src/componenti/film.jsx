export function Film({ aggiungiPreferiti, rimuoviPreferiti, titolo, stato }) {
  return (
    <li>
      {titolo}
      {stato} ? (
      <button onClick={() => aggiungiPreferiti(titolo)}>
        "Aggiungi ai preferiti"
      </button>
      ):(
      <button onClick={() => rimuoviPreferiti(titolo)}>
        "Rimuovi dai preferiti"
      </button>
      )
    </li>
  );
}
