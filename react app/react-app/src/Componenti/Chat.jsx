import { useState } from "react";
import { useEffect } from "react";

export default function Chat() {
  const [count, setCount] = useState(" ");
  const [count1, setCount1] = useState(" ");
  const [buttonCount, setButtonCount] = useState([]);
  const [buttonCount2, setButtonCount2] = useState([]);
  const [buttonV, setButtonV] = useState("false");
  const [buttonV2, setButtonV2] = useState("false");
  const [classN, setClassN] = useState("div");

  function onChange1(event) {
    const value = event.target.value;
    setCount(value);
  }

  function onChange2(event) {
    const value = event.target.value;
    setCount1(value);
  }

  function buttonClick() {
    setButtonCount((prev) => [...prev, count]);
    setButtonV("true");
    setCount(" ");
  }
  function buttonClick2() {
    setButtonCount2((prev) => [...prev, count1]);
    setButtonV2("true");
    setCount1(" ");
  }

  useEffect(() => {
    if (buttonCount.length > buttonCount2.length) {
      setButtonCount2((prev) => [
        ...prev,
        <div
          className={classN}
          style={{
            display: "inline-block",
            width: "1px",
            backgroundColor: "white",
          }}
        />,
      ]);
    } else if (buttonCount.length + 1 < buttonCount2.length + 1) {
      setButtonCount((prev) => [
        ...prev,
        <div
          className={classN}
          style={{
            display: "inline-block",
            width: "1px",
            backgroundColor: "white",
          }}
        />,
      ]);
    }
  }, [buttonCount, buttonCount2]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <input type="text" value={count} onChange={onChange1} />
          <button value={buttonV} onClick={buttonClick}>
            Invia
          </button>
        </div>

        <div>
          <input type="text" value={count1} onChange={onChange2} />
          <button button value={buttonV2} onClick={buttonClick2}>
            Invia
          </button>
        </div>
      </div>
      <div style={{ display: "flex", gap: "100px" }}>
        {buttonV === "true" && (
          <div>
            {buttonCount.map((element) => {
              return (
                <div
                  style={{
                    backgroundColor: classN === "div" ? "white" : "green",

                    alignSelf: "flex-start",
                  }}
                >
                  <p>{element}</p>
                </div>
              );
            })}
          </div>
        )}
        {buttonV2 === "true" && (
          <div style={{}}>
            {buttonCount2.map((element, index) => {
              return (
                <div
                  style={{
                    backgroundColor: classN === "div" ? "white" : "green",
                    alignSelf: "flex-end",
                  }}
                >
                  <p key={index}>{element}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
