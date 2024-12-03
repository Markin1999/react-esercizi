import Eta from "./Componenti/eta";

function Welcome({ name, age }) {
  const message = <p>La tua eta è:{age}</p>;
  return (
    <>
      <h1>
        Welcome, <strong>{name}</strong>
      </h1>
      <Eta message={message} />
    </>
  );
}

export default Welcome;
