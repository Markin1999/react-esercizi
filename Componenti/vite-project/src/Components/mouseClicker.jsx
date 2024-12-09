export default function Mouse() {
  function onClick(event) {
    console.log(event.target);
  }
  return (
    <>
      <button onClick={onClick}></button>
    </>
  );
}
