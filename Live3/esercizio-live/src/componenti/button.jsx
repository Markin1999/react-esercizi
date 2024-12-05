export function FilmButton(props) {
  return (
    <div>
      <button onClick={props.handle}>{props.label}</button>
      <button onClick={props.handle}>{props.label}</button>
    </div>
  );
}
