import Eta from "./eta";
import Messaggio from "./Messaggio";

function Welcome({ name, age }) {
  const message = age && age > 18 && age < 65 && <p>La tua eta è: {age}</p>;
  return (
    <>
      {name === "John" && message ? (
        <>
          <h1>
            Welcome, <strong>{name}</strong>
          </h1>

          <Eta message={message} />
        </>
      ) : age < 18 ? (
        <Messaggio eta={age} />
      ) : (
        <h2>Accesso non consentito.</h2>
      )}
    </>
  );
}

export default Welcome;
