function Saluto(props) {
  return (
    <h1>
      Ciao <span className={props.className}>{props.nome}</span>
    </h1>
  );
}

export default Saluto;
