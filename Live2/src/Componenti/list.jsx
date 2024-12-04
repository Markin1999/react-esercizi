function List() {
  const colori = ["Rosso", "Verde", "Marrone", "Giallo", "Viola"];

  return (
    <>
      <ul>
        {colori.map((x, index) => {
          <li key={index}>{x}</li>;
        })}
      </ul>
    </>
  );
}

export default List;
