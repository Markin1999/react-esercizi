function List() {
  const colori = ["Rosso", "Verde", "Marrone", "Giallo", "Viola"];
  const handleClick = (colore) => {
    alert(`Hai cliccalto il colore ${colore}`);
  };

  return (
    <>
      <ul>
        {colori.map(
          (
            colore,
            index //Utile per mostrare tutto l'array di colori in una lista
          ) => (
            <li onClick={() => handleClick(colore)} key={index}>
              {colore}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default List;
