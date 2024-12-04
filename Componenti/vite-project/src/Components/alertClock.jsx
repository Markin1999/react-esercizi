import Button from "./Button";

function AlertClock() {
  function handleButtonClick() {
    alert("Current time:" + new Date().toLocaleTimeString());
  }
  return (
    <div>
      <p>click the button to see the current time</p>
      <button onClick={handleButtonClick}>Click me!</button>
      <Button onClick={handleButtonClick} title="Click me" />
    </div>
  );
}

export default AlertClock;

//Un pulsante che al click mostra un alert dell'ora
