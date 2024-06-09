import { useRef } from "react";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  // const email = useRef();
  // const [enteredPassword, setEnteredPassword] = useState("");

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput("");
  function handleSubmit(event) {
    event.preventDefault();
  }

  // function handleInputChange(_identifier, value) {
  // setEnteredPassword(value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
          {/*ref={email} />*/}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={""}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
