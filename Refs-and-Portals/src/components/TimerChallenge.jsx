import React from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = React.useRef();
  const dialog = React.useRef();
  const [timerExp, setTimerExp] = React.useState(false);
  const [isStarted, setIsStarted] = React.useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExp(true);
      setIsStarted(false);
      dialog.current.open();
    }, 1000 * targetTime);
    setIsStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setIsStarted(false);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="ss" />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExp && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={isStarted ? handleStop : handleStart}>
          {isStarted ? "Stop" : "Start"} challenge
        </button>
        <p className={isStarted ? "active" : undefined}>
          Timer {isStarted ? "is running..." : "is inactive"}
        </p>
      </section>
    </>
  );
}
