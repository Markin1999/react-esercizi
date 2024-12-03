function Chat({ testo, inviato }) {
  return (
    <div
      className={inviato ? "green" : "white"}
      style={{
        color: "black",
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: inviato ? "green" : "white",
        alignSelf: inviato ? "flex-start" : "flex-end",
      }}
    >
      {testo}
    </div>
  );
}

export default Chat;
