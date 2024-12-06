export function Semaforo(props) {
  const styling = (colore) => ({
    borderRadius: "50px",
    width: "20px",
    height: "20px",
    backgroundColor: colore,
    opacity: props.colore === colore ? 1 : 0.5,
  });

  return (
    <div
      style={{
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <div style={styling("red")}></div>
      <div style={styling("yellow")}></div>
      <div style={styling("green")}></div>
    </div>
  );
}
