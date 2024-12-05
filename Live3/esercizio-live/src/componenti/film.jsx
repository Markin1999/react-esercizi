export function Film(props) {
  return (
    <li>
      {props.titolo}
      {props.stato} ? (
      <button onClick={props.Add}>"Aggiungi ai preferiti"</button>):(
      <button onClick={props.remove}>"Rimuovi dai preferiti"</button>)
    </li>
  );
}
