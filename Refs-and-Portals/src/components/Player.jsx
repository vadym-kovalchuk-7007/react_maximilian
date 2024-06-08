import React from "react";
export default function Player() {
  const playerName = React.useRef();
  const [enteredName, setEnteredName] = React.useState(null);

  function handleButtonClick() {
    setEnteredName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
