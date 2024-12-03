function Messaggio() {
  const messaggi = [
    "Oggi fa caldo",
    " Fa molto freddo",
    "Fuori piove",
    "Sta nevicando",
    "Il cielo è nuvoloso",
  ];

  const indice = Math.floor(Math.random() * messaggi.length);

  return (
    <>
      {!messaggi[indice] ? (
        <p style={{ color: "red" }}>Errore</p>
      ) : (
        <p>{messaggi[indice]}</p>
      )}
    </>
  );
}
export default Messaggio;
