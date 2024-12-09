export default function MouseClicker() {
  function onClick(event) {
    console.log(event.currentTarget.name);
  }

  function onClickimg(event) {
    console.log(event.target.src);
  }

  return (
    <>
      <button name="one" onClick={onClick}>
        one
      </button>
      <button name="two" onClick={onClick}>
        <img
          src="https://via.placeholder.com/50"
          alt=""
          style={{ width: "24px", height: "24px" }}
          onClick={onClickimg}
        />
        two
      </button>
    </>
  );
}

//l'event current targer si riferisce all'elemento la quale il gestore degli eventi è associato, mentre target, all'elemento effettivo
