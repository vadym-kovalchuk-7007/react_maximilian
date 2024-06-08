import React from "react";
import { createPortal } from "react-dom";
const ResultModal = React.forwardRef(({ result, targetTime }, ref) => {
  const dialog = React.useRef();
  const onReset = () => {
    console.log("Dialog closed");
  };
  React.useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
});

export default ResultModal;
